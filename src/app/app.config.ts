import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import Lara from '@primeuix/themes/Lara';
import {routes} from './app.routes';
import {all} from "primelocale";
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {includeBearerTokenInterceptor, provideKeycloak, responseErrorInterceptor} from '../common/config/auth.config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      translation: all.zh_CN,
      theme: {
        preset: Lara
      }
    }),
    provideKeycloak(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor, responseErrorInterceptor])),
  ]
};
