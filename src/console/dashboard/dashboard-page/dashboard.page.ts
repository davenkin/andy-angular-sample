import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { take } from 'rxjs';
import { EquipmentApi } from 'console/dashboard/equipment-api';
import { ToastService } from 'common/service/toast.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
})
export class DashboardPage {
  private equipmentApi = inject(EquipmentApi);
  private toastService = inject(ToastService);

  protected createEquipment() {
    this.equipmentApi
      .createEquipment()
      .pipe(take(1))
      .subscribe((response) => {
        this.toastService.info(response.id);
      });
  }
}
