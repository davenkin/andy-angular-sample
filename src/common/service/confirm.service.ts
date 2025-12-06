import { inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { FocusService } from 'common/service/focus.service';

export type ConfirmationSeverity = 'primary' | 'success' | 'warn' | 'danger';

export interface Confirmation {
  severity?: ConfirmationSeverity;
  header: string;
  message: string;
  rejectButtonSeverity?: ConfirmationSeverity;
  acceptButtonText?: string;
  rejectButtonText?: string;
  accept?: () => void;
  reject?: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  private confirmationService = inject(ConfirmationService);
  private focusService = inject(FocusService);

  public confirm(confirmation: Confirmation) {
    this.focusService.push();
    this.confirmationService.confirm({
      message: confirmation.message,
      header: confirmation.header,
      icon: this.iconFor(confirmation.severity ?? 'primary'),
      rejectButtonProps: {
        label: confirmation.rejectButtonText ?? '取消',
        severity: confirmation.rejectButtonSeverity ?? 'secondary',
      },
      acceptButtonProps: {
        label: confirmation.acceptButtonText ?? '确定',
        severity: confirmation.severity ?? 'primary',
      },
      accept: () => {
        this.focusService.pop();
        confirmation.accept?.();
      },
      reject: () => {
        this.focusService.pop();
        confirmation.reject?.();
      },
    });
  }

  private iconFor(severity: ConfirmationSeverity) {
    switch (severity) {
      case 'primary': {
        return 'pi pi-info-circle cp-confirmation-primary';
      }
      case 'success': {
        return 'pi pi-info-circle cp-confirmation-success';
      }
      case 'warn': {
        return 'pi pi-exclamation-triangle cp-confirmation-warn';
      }
      case 'danger': {
        return 'pi pi-info-circle cp-confirmation-danger';
      }
    }
  }
}
