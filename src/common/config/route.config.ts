import {Routes} from '@angular/router';
import {DemoHomePage} from 'public/demo-home-page/demo-home.page';
import {DesignSystemPage} from 'public/design-system/design-system.page';
import {DemoDeviceListPage} from 'console/demo-device/list-page/demo-device-list.page';
import {ConsolePageMainComponent} from 'common/component/console-page-main/console-page-main.component';
import {ConsolePageBaseComponent} from 'common/component/console-page-base/console-page-base.component';
import {RemoteDesktopComponent} from 'console/demo-device/remote-operation/remote-desktop/remote-desktop.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'console',
    component: ConsolePageBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'main/demo-devices',
        pathMatch: 'full'
      },
      {
        path: 'main',
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
        component: RemoteDesktopComponent
      }
    ]
  },
  {
    path: 'public',
    children: [
      {
        path: '',
        redirectTo: 'demo-home',
        pathMatch: 'full'
      },
      {
        path: 'demo-home',
        component: DemoHomePage
      },
      {
        path: 'design-system',
        component: DesignSystemPage
      }
    ]
  }
];
