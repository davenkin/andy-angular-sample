import { Component } from '@angular/core';
import iconRegistry from 'common/component/icon/icon-registry';
import { IconComponent, IconType } from 'common/component/icon/icon.component';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-design-system-page',
  imports: [IconComponent, RouterLink, ButtonLabel, ButtonDirective],
  templateUrl: './design-system.page.html',
  styleUrl: './design-system.page.scss',
})
export class DesignSystemPage {
  get allIcons(): IconType[] {
    return Object.keys(iconRegistry) as IconType[];
  }

  get allCommonColors(): string[] {
    return [
      '--emerald-light',
      '--emerald-main',
      '--green-light',
      '--green-main',
      '--lime-light',
      '--lime-main',
      '--red-light',
      '--red-main',
      '--orange-light',
      '--orange-main',
      '--amber-light',
      '--amber-main',
      '--yellow-light',
      '--yellow-main',
      '--teal-light',
      '--teal-main',
      '--cyan-light',
      '--cyan-main',
      '--sky-light',
      '--sky-main',
      '--blue-light',
      '--blue-main',
      '--indigo-light',
      '--indigo-main',
      '--violet-light',
      '--violet-main',
      '--purple-light',
      '--purple-main',
      '--fuchsia-light',
      '--fuchsia-main',
      '--pink-light',
      '--pink-main',
      '--rose-light',
      '--rose-main',
      '--slate-light',
      '--slate-main',
      '--gray-light',
      '--gray-main',
      '--zinc-light',
      '--zinc-main',
      '--neutral-light',
      '--neutral-main',
      '--stone-light',
      '--stone-main',
    ];
  }
}
