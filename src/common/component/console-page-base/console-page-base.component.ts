import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-console-page-base',
  templateUrl: './console-page-base.component.html',
  imports: [
    RouterOutlet
  ],
  styleUrl: './console-page-base.component.scss'
})
export class ConsolePageBaseComponent {
  // todo: add some common logic that are required by all console pages，加载
}
