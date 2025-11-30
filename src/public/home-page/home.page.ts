import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { IconComponent } from 'common/component/icon/icon.component';
import { ToastService } from 'common/service/toast.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Button, IconComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private toastService = inject(ToastService);
  toast() {
    this.toastService.success('成功完成任务');
  }
}
