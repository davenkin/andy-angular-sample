import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [NgxSpinnerComponent],
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  name = input.required<string>();
  fullScreen = input<boolean>(false);
}
