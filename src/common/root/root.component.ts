import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GLOBAL_SPINNER } from 'common/service/spinner.service';
import { SpinnerComponent } from 'common/component/spinner/spinner.component';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { RefreshService } from 'common/service/refresh.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, SpinnerComponent, Toast, ConfirmDialog],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  protected readonly GLOBAL_SPINNER = GLOBAL_SPINNER;
  protected refreshService = inject(RefreshService);
}
