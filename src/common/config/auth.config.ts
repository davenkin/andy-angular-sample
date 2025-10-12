import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {catchError, from, mergeMap, Observable, throwError} from 'rxjs';
import {EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer} from '@angular/core';
import Keycloak from 'keycloak-js';
import {GuardsCheckStart, Router} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

const BEARER_TOKEN_EXCLUDED_URLS: UrlCondition[] = [];

export function provideKeycloak(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: Keycloak,
      useValue: new Keycloak({
        url: "http://localhost:8080",
        realm: "test-realm",
        clientId: "test-client"
      })
    },
    provideAppInitializer(async () => {
      try {
        return await inject(Keycloak).init({
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`
        });
      } catch (error) {
        console.error('Error while initialize keycloak.', error);
        throw error;
      }
    }),
    provideAppInitializer(() => {
      let router = inject(Router);
      let keycloak = inject(Keycloak);
      router.events.pipe(takeUntilDestroyed()).subscribe(event => {
        if (event instanceof GuardsCheckStart) {
          if (!event.url.startsWith('/public') && (!keycloak.authenticated || keycloak.isTokenExpired())) {
            keycloak.login({redirectUri: window.location.origin + event.url});
          }
        }
      });
    }),
  ]);
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';

interface UrlCondition {
  urlPattern: RegExp;
  httpMethods?: HttpMethod[]
}

function canMatch(req: HttpRequest<unknown>, condition: UrlCondition) {
  let patternMatched = condition.urlPattern.test(req.url);
  if (!patternMatched) {
    return false;
  }

  return condition.httpMethods ? condition.httpMethods.includes(req.method.toUpperCase() as HttpMethod) : true;
}

export function includeBearerTokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let shouldExclude = BEARER_TOKEN_EXCLUDED_URLS.some(it => canMatch(req, it));
  if (shouldExclude) {
    return next(req);
  }

  let keycloak = inject(Keycloak);
  return from((async () => {
    return await keycloak.updateToken().catch(() => false);
  })()).pipe(mergeMap(() => {
    if (keycloak.token) {
      return next(req.clone({
        setHeaders: {
          'Authorization': `Bearer ${keycloak.token}`
        }
      }));
    }
    return next(req);
  }))
}

export function responseErrorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let keycloak = inject(Keycloak);
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    if (error.status === 401) {
      keycloak.login();
    }
    if (error.status === 403) {
      //todo: toast message
    }
    if (error.status === 500) {
      //todo: toast message
    }
    return throwError(() => error);
  }));
}
