import {Component} from '@angular/core';
import iconRegistry from 'common/component/icon/icon-registry';
import {IconComponent, IconType} from 'common/component/icon/icon.component';
import {ButtonDirective, ButtonLabel} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-design-system-page',
  imports: [
    IconComponent,
    RouterLink,
    ButtonLabel,
    ButtonDirective
  ],
  templateUrl: './design-system.page.html',
  styleUrl: './design-system.page.scss'
})
export class DesignSystemPage {

  get allIcons() {
    return Object.keys(iconRegistry) as IconType[];
  }
}
