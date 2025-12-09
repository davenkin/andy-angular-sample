import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { IconComponent } from 'common/component/icon/icon.component';
import { ToastService } from 'common/service/toast.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrentContextService } from 'common/service/current-context.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Button, IconComponent, TranslatePipe, DatePipe],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private toastService = inject(ToastService);
  protected currentContext = inject(CurrentContextService);

  toast() {
    this.toastService.success('成功完成任务');
  }

  protected readonly Date = Date;
}
