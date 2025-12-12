import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from 'common/component/spinner/spinner.component';
import { CONSOLE_MAIN_SPINNER } from 'common/service/spinner.service';
import { CurrentContextService } from 'common/service/current-context.service';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { LanguageSwitcherComponent } from 'common/component/language-switcher/language-switcher.component';
import { TranslatePipe } from '@ngx-translate/core';
import { OrgSwitcherComponent } from 'common/component/org-switcher/org-switcher.component';

@Component({
  selector: 'app-console-page-main',
  templateUrl: './console-page-main.component.html',
  imports: [
    RouterOutlet,
    SpinnerComponent,
    ButtonDirective,
    ButtonLabel,
    RouterLink,
    LanguageSwitcherComponent,
    TranslatePipe,
    OrgSwitcherComponent,
  ],
  styleUrl: './console-page-main.component.scss',
})
export class ConsolePageMainComponent {
  protected currentContextService = inject(CurrentContextService);

  // todo: 添加左侧导航菜单
  protected readonly CONSOLE_MAIN_SPINNER = CONSOLE_MAIN_SPINNER;
}
