import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from 'common/component/spinner/spinner.component';
import { CONSOLE_MAIN_SPINNER } from 'common/service/spinner.service';
import { CurrentContextService } from 'common/service/current-context.service';
import { ButtonDirective, ButtonLabel } from 'primeng/button';

@Component({
  selector: 'app-console-page-main',
  templateUrl: './console-page-main.component.html',
  imports: [RouterOutlet, SpinnerComponent, ButtonDirective, ButtonLabel, RouterLink],
  styleUrl: './console-page-main.component.scss',
})
export class ConsolePageMainComponent {
  protected currentContextService = inject(CurrentContextService);

  // todo: 添加左侧导航菜单
  protected readonly CONSOLE_MAIN_SPINNER = CONSOLE_MAIN_SPINNER;
}
