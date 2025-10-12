import {Routes} from '@angular/router';
import {Hello} from '../hello/hello';
import {PublicComponent} from '../public-component/public-component';
import {PublicComponent2} from '../public-component2/public-component2';

export const routes: Routes = [
  {
    path: 'hello',
    component: Hello
  },
  {
    path: 'public',
    children: [
      {
        path: '',
        redirectTo: 'hello',
        pathMatch: 'full'
      },
      {
        path: 'hello',
        component: PublicComponent
      },
      {
        path: 'hello1',
        component: PublicComponent2
      }
    ]

  }
];
