import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import Lara from '@primeuix/themes/Lara';

import {routes} from './app.routes';
import {all} from "primelocale";
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {
  AutoRefreshTokenService,
  includeBearerTokenInterceptor,
  provideKeycloak,
  UserActivityService, withAutoRefreshToken
} from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
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
    provideKeycloak({
      config: {
        url: 'http://localhost:7123',
        realm: 'test',
        clientId: 'test'
      },
      initOptions: {
        onLoad: 'login-required'
      },
      features:[
        withAutoRefreshToken({
          onInactivityTimeout: 'login',
          sessionTimeout: 1800000
        })
      ],
      providers: [AutoRefreshTokenService, UserActivityService]
    }),
  ]
};
