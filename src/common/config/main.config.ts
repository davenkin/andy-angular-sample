import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from 'common/config/route.config';
import {all} from "primelocale";
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {includeBearerTokenInterceptor, provideKeycloak} from 'common/config/auth.config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {apiResponseErrorInterceptor} from './error.config';
import {PRIMENG_PRESET} from 'common/style/primeng/preset/primeng-preset';
import {NgxSpinnerModule} from 'ngx-spinner';

export const applicationConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      translation: all.zh_CN,
      theme: {
        preset: PRIMENG_PRESET,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'reset, base, primeng, utility'
          }
        }
      },
    }),
    provideKeycloak(),
    importProvidersFrom(NgxSpinnerModule),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor, apiResponseErrorInterceptor])),
  ]
};
