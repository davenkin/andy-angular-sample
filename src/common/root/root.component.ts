import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GLOBAL_SPINNER } from 'common/service/spinner.service';
import { SpinnerComponent } from 'common/component/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, SpinnerComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  protected readonly GLOBAL_SPINNER = GLOBAL_SPINNER;
}
