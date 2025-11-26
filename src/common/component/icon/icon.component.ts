import {Component, Input} from '@angular/core';
import iconRegistry from 'common/component/icon/icon-registry';
import {DomSanitizer} from '@angular/platform-browser';

export type IconType = keyof typeof iconRegistry;

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input({required: true}) icon?: IconType;

  constructor(private domSanitizer: DomSanitizer) {
  }

  get iconSvg() {
    return this.domSanitizer.bypassSecurityTrustHtml(iconRegistry[this.icon as IconType]);
  }
}
