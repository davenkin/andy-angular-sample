import {ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot, Routes} from '@angular/router';
import {HomePage} from 'public/home-page/home.page';
import {DesignSystemPage} from 'public/design-system/design-system.page';
import {DemoDeviceListPage} from 'console/demo-device/list-page/demo-device-list.page';
import {ConsolePageMainComponent} from 'common/component/console-page-main/console-page-main.component';
import {ConsolePageBaseComponent} from 'common/component/console-page-base/console-page-base.component';
import {RemoteDesktopPage} from 'console/demo-device/remote-operation/remote-desktop/remote-desktop.page';
import {inject} from '@angular/core';
import Keycloak from 'keycloak-js';
import {SpinnerService} from 'common/service/spinner.service';

const ensureAuthenticatedAuthGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const keycloak = inject(Keycloak);
  const spinnerService = inject(SpinnerService);
  if (keycloak.authenticated) {
    return true;
  }

  spinnerService.showGlobalSpinner();
  keycloak.login({redirectUri: window.location.origin + state.url});
  return false;
};

export const routes: Routes = [
  {
    path: 'console',
    component: ConsolePageBaseComponent,
    canActivateChild: [ensureAuthenticatedAuthGuard],
    children: [
      {
        path: '',
        component: ConsolePageMainComponent,
        children: [
          {
            path: 'demo-devices',
            component: DemoDeviceListPage
          },
        ]
      },
      {
        path: 'remote-desktop',
        component: RemoteDesktopPage
      }
    ]
  },
  {
    path: '',
    component: HomePage
  },
  {
    path: 'design-system',
    component: DesignSystemPage
  }
];
