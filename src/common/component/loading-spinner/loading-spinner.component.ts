import {Component, Input} from '@angular/core';
import {NgxSpinnerComponent} from 'ngx-spinner';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  imports: [
    NgxSpinnerComponent
  ],
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  @Input({required: true}) name: string = '';
  @Input() fullScreen: boolean = false;
}
