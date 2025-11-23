import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SpinnerComponent} from 'common/component/spinner/spinner.component';
import {CONSOLE_MAIN_SPINNER, SpinnerService} from 'common/service/spinner.service';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-console-page-main',
  templateUrl: './console-page-main.component.html',
  imports: [
    RouterOutlet,
    SpinnerComponent,
    Button
  ],
  styleUrl: './console-page-main.component.scss'
})
export class ConsolePageMainComponent {
// todo: 添加左侧导航菜单
  protected readonly CONSOLE_MAIN_SPINNER = CONSOLE_MAIN_SPINNER;

  constructor(protected spinnerService: SpinnerService) {
  }

  showSpinner() {
    this.spinnerService.showConsoleMainSpinner();
  }
}
