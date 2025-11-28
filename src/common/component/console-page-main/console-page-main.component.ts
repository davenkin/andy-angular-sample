import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from 'common/component/spinner/spinner.component';
import { CONSOLE_MAIN_SPINNER } from 'common/service/spinner.service';

@Component({
  selector: 'app-console-page-main',
  templateUrl: './console-page-main.component.html',
  imports: [RouterOutlet, SpinnerComponent],
  styleUrl: './console-page-main.component.scss',
})
export class ConsolePageMainComponent {
  // todo: 添加左侧导航菜单
  protected readonly CONSOLE_MAIN_SPINNER = CONSOLE_MAIN_SPINNER;
}
