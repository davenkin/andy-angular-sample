import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { from, Observable, switchMap } from 'rxjs';
import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import Keycloak from 'keycloak-js';
import { CurrentContextService } from 'common/service/current-context.service';
import { environment } from 'environments/environment';

const AUTH_EXCLUDED_URLS: UrlCondition[] = [];

function resolveKeycloakRealm(): string {
  return 'test-realm'; // todo: can get the realm from the current URL, and default to a fixed realm
}

function resolveKeycloakClientId(): string {
  return 'test-client'; // todo: can get the clientId from the current URL, and default to a fixed clientId
}

export function provideKeycloak(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: Keycloak,
      useValue: new Keycloak({
        url: environment.keycloakUrl,
        realm: resolveKeycloakRealm(),
        clientId: resolveKeycloakClientId(),
      }),
    },
    provideAppInitializer(async () => {
      try {
        return await inject(Keycloak).init({
          checkLoginIframe: false,
        });
      } catch (error) {
        console.error('Error while initialize keycloak.', error);
        throw error;
      }
    }),
  ]);
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';

// either urlPattern or urlIncluded matches
interface UrlCondition {
  urlPattern?: RegExp;
  urlIncluded?: string;
  httpMethods?: HttpMethod[];
}

function canMatch(req: HttpRequest<unknown>, condition: UrlCondition) {
  const urlMatched =
    condition.urlPattern?.test(req.url) || (condition.urlIncluded ? req.url.includes(condition.urlIncluded) : false);
  if (!urlMatched) {
    return false;
  }

  return condition.httpMethods ? condition.httpMethods.includes(req.method.toUpperCase() as HttpMethod) : true;
}

export function includeBearerTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const shouldExclude = AUTH_EXCLUDED_URLS.some((it) => canMatch(req, it));
  if (shouldExclude) {
    return next(req);
  }

  const keycloak = inject(Keycloak);
  const currentContext = inject(CurrentContextService);

  return from(
    (async () => {
      return await keycloak.updateToken(60).catch(() => {
        keycloak.login();
      });
    })(),
  ).pipe(
    switchMap(() => {
      if (keycloak.token) {
        return next(
          req.clone({
            setHeaders: {
              Authorization: `Bearer ${keycloak.token}`,
              orgId: currentContext.orgId() as string,
            },
          }),
        );
      }
      return next(req);
    }),
  );
}
