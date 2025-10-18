import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {inject} from '@angular/core';
import Keycloak from 'keycloak-js';

export function apiResponseErrorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let keycloak = inject(Keycloak);
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    if (error.status === 401) {
      keycloak.login();
    }
    if (error.status === 403) {
      //todo: impl
    }
    if (error.status === 500) {
      //todo: impl
    }
    return throwError(() => error);
  }));
}
