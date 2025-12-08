import { Component, inject } from '@angular/core';
import iconRegistry from 'common/component/icon/icon-registry';
import { IconComponent, IconType } from 'common/component/icon/icon.component';
import { Button, ButtonDirective, ButtonLabel } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { ToastService } from 'common/service/toast.service';
import { EllipsisedComponent } from 'common/component/ellipsised-text/ellipsised.component';
import { ConfirmationSeverity, ConfirmService } from 'common/service/confirm.service';
import { DialogCloseResult, DialogService, DialogSize } from 'common/service/dialog.service';
import { DemoDialog } from 'public/design-system/demo-dialog/demo.dialog';
import { take } from 'rxjs';
import { DemoDeviceListComponent } from 'public/design-system/demo-device/list/demo-device-list.component';

@Component({
  selector: 'app-design-system-page',
  imports: [
    IconComponent,
    RouterLink,
    ButtonLabel,
    ButtonDirective,
    Button,
    EllipsisedComponent,
    DemoDeviceListComponent,
  ],
  templateUrl: './design-system.page.html',
  styleUrl: './design-system.page.scss',
})
export class DesignSystemPage {
  private toastService = inject(ToastService);
  private confirmService = inject(ConfirmService);
  private dialogService = inject(DialogService);

  get allIcons(): IconType[] {
    return Object.keys(iconRegistry) as IconType[];
  }

  get allCommonColors(): string[] {
    return [
      '--emerald-light',
      '--emerald-main',
      '--green-light',
      '--green-main',
      '--lime-light',
      '--lime-main',
      '--red-light',
      '--red-main',
      '--orange-light',
      '--orange-main',
      '--amber-light',
      '--amber-main',
      '--yellow-light',
      '--yellow-main',
      '--teal-light',
      '--teal-main',
      '--cyan-light',
      '--cyan-main',
      '--sky-light',
      '--sky-main',
      '--blue-light',
      '--blue-main',
      '--indigo-light',
      '--indigo-main',
      '--violet-light',
      '--violet-main',
      '--purple-light',
      '--purple-main',
      '--fuchsia-light',
      '--fuchsia-main',
      '--pink-light',
      '--pink-main',
      '--rose-light',
      '--rose-main',
      '--slate-light',
      '--slate-main',
      '--gray-light',
      '--gray-main',
      '--zinc-light',
      '--zinc-main',
      '--neutral-light',
      '--neutral-main',
      '--stone-light',
      '--stone-main',
    ];
  }

  protected showToast(type: string, message: string) {
    switch (type) {
      case 'info': {
        this.toastService.info(message);
        break;
      }
      case 'success': {
        this.toastService.success(message);
        break;
      }
      case 'warn': {
        this.toastService.warn(message);
        break;
      }
      case 'error': {
        this.toastService.error(message);
        break;
      }
    }
  }

  protected showConfirmation(severity: ConfirmationSeverity) {
    this.confirmService.confirm({
      severity: severity,
      header: '确认一下',
      message: '今天你过得开心吗？',
      accept: () => {
        this.toastService.success('看来你挺开心的');
      },
      reject: () => {
        this.toastService.error('看来你不开心');
      },
    });
  }

  protected showDialog(size: DialogSize) {
    const dialogRef = this.dialogService.open(DemoDialog, {
      header: '对话框',
      size: size,
      data: {
        message: '这是传入的数据',
      },
    });
    dialogRef.onClose.pipe(take(1)).subscribe((result) => {
      if (result === DialogCloseResult.SUCCEED) {
        this.toastService.success('成功完成某个事项');
      } else {
        this.toastService.error('未完成某个事项');
      }
    });
  }
}
