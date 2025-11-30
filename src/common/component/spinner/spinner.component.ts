import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [NgxSpinnerComponent],
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input({ required: true }) name = '';
  @Input() fullScreen = false;
}
