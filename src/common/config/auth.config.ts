import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { from, Observable, switchMap } from 'rxjs';
import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import Keycloak from 'keycloak-js';

const AUTH_EXCLUDED_URLS: UrlCondition[] = [];

export function provideKeycloak(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: Keycloak,
      useValue: new Keycloak({
        url: 'http://localhost:8080',
        realm: 'test-realm',
        clientId: 'test-client',
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
  return from(
    (async () => {
      return await keycloak.updateToken(60).catch((result) => {
        if (!result) {
          keycloak.login();
        }
      });
    })(),
  ).pipe(
    switchMap(() => {
      if (keycloak.token) {
        return next(
          req.clone({
            setHeaders: {
              Authorization: `Bearer ${keycloak.token}`,
            },
          }),
        );
      }
      return next(req);
    }),
  );
}
