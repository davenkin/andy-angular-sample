import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import Lara from '@primeuix/themes/Lara';
import {routes} from 'common/config/route.config';
import {all} from "primelocale";
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {includeBearerTokenInterceptor, provideKeycloak} from 'common/config/auth.config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {apiResponseErrorInterceptor} from './error.config';

export const applicationConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      translation: all.zh_CN,
      theme: {
        preset: Lara,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'reset, global, primeng, utility'
          }
        }
      },
    }),
    provideKeycloak(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor, apiResponseErrorInterceptor])),
  ]
};
