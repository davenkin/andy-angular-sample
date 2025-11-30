import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageService = inject(MessageService);

  public success(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: message,
      closable: false,
    });
  }
}
