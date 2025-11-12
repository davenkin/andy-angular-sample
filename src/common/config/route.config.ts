import {Routes} from '@angular/router';
import {DemoHomePage} from 'public/demo-home-page/demo-home.page';
import {DesignSystemPage} from 'public/design-system/design-system.page';
import {DemoDeviceListPage} from 'console/demo-device/list-page/demo-device-list.page';
import {ConsolePageLayoutComponent} from 'common/component/console-page-layout/console-page-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'console',
    component: ConsolePageLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'demo-devices',
        pathMatch: 'full'
      },
      {
        path: 'demo-devices',
        component: DemoDeviceListPage
      },
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
