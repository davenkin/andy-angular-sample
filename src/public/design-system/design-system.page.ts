import {Component} from '@angular/core';
import iconRegistry from 'common/component/icon/icon-registry';
import {IconComponent, IconType} from 'common/component/icon/icon.component';

@Component({
  selector: 'app-design-system-page',
  imports: [
    IconComponent
  ],
  templateUrl: './design-system.page.html',
  styleUrl: './design-system.page.scss'
})
export class DesignSystemPage {

  get allIcons() {
    return Object.keys(iconRegistry) as IconType[];
  }
}
