import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { take } from 'rxjs';
import { AboutApi } from 'console/dashboard/about.api';
import { ToastService } from 'common/service/toast.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
})
export class DashboardPage {
  private aboutApi = inject(AboutApi);
  private toastService = inject(ToastService);

  protected callAbout() {
    this.aboutApi
      .about()
      .pipe(take(1))
      .subscribe((aboutInfo) => {
        this.toastService.info(aboutInfo.fetchTime);
      });
  }
}
