import {bootstrapApplication} from '@angular/platform-browser';
import {applicationConfig} from 'common/config/main.config';
import {RootComponent} from 'common/root/root.component';

bootstrapApplication(RootComponent, applicationConfig)
  .catch((err) => console.error(err));
