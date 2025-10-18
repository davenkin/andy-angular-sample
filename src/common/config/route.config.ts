import {Routes} from '@angular/router';
import {DemoHomePageComponent} from 'public/demo-home-page/demo-home-page.component';
import {DesignSystemPageComponent} from 'public/design-system/design-system-page.component';
import {DemoDeviceListPageComponent} from 'console/demo-device/list-page/demo-device-list-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'demo-devices',
    component: DemoDeviceListPageComponent
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
        component: DemoHomePageComponent
      },
      {
        path: 'design-system',
        component: DesignSystemPageComponent
      }
    ]
  }
];
