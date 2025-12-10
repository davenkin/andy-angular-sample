import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot, Routes } from '@angular/router';
import { DesignSystemPage } from 'public/design-system/design-system.page';
import { DemoDeviceListPage } from 'console/demo-device/list-page/demo-device-list.page';
import { ConsolePageMainComponent } from 'common/component/console-page-main/console-page-main.component';
import { ConsolePageBaseComponent } from 'common/component/console-page-base/console-page-base.component';
import { RemoteDesktopPage } from 'console/demo-device/remote-operation/remote-desktop/remote-desktop.page';
import { inject } from '@angular/core';
import Keycloak from 'keycloak-js';
import { PublicPageMainComponent } from 'common/component/public-page-main/public-page-main.component';
import { HomePage } from 'public/home-page/home.page';
import { PricingPage } from 'public/pricing-page/pricing.page';

const ensureAuthenticatedGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const keycloak = inject(Keycloak);
  if (keycloak.authenticated) {
    return true;
  }

  keycloak.login({ redirectUri: window.location.origin + state.url });
  return false;
};

export const routes: Routes = [
  {
    path: 'console',
    component: ConsolePageBaseComponent,
    canActivateChild: [ensureAuthenticatedGuard],
    children: [
      {
        path: '',
        component: ConsolePageMainComponent,
        children: [
          {
            path: 'demo-devices',
            component: DemoDeviceListPage,
          },
        ],
      },
      {
        path: 'remote-desktop',
        component: RemoteDesktopPage,
      },
    ],
  },
  {
    path: '',
    component: PublicPageMainComponent,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'pricing',
        component: PricingPage,
      },
    ],
  },
  {
    path: 'design-system',
    component: DesignSystemPage,
  },
];
