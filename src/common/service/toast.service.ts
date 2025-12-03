import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageService = inject(MessageService);

  public success(message: string) {
    this.showToast('success', message);
  }

  public info(message: string) {
    this.showToast('info', message);
  }

  public warn(message: string) {
    this.showToast('warn', message);
  }

  public error(message: string) {
    this.showToast('error', message);
  }

  private showToast(severity: string, message: string) {
    this.messageService.add({
      severity: severity,
      summary: message,
      closable: false,
    });
  }
}
