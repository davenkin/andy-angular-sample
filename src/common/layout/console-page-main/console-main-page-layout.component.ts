import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from 'common/component/spinner/spinner.component';
import { CONSOLE_MAIN_SPINNER } from 'common/service/spinner.service';
import { CurrentContextService } from 'common/service/current-context.service';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { LanguageSwitcherComponent } from 'common/component/language-switcher/language-switcher.component';
import { OrgSwitcherComponent } from 'common/component/org-switcher/org-switcher.component';

@Component({
  selector: 'app-console-main-page-layout',
  templateUrl: './console-main-page-layout.component.html',
  imports: [
    RouterOutlet,
    SpinnerComponent,
    ButtonDirective,
    ButtonLabel,
    RouterLink,
    LanguageSwitcherComponent,
    OrgSwitcherComponent,
  ],
  styleUrl: './console-main-page-layout.component.scss',
})
export class ConsoleMainPageLayoutComponent {
  protected currentContextService = inject(CurrentContextService);
  protected readonly CONSOLE_MAIN_SPINNER = CONSOLE_MAIN_SPINNER;
}
