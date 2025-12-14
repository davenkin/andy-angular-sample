import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Button } from 'primeng/button';
import { DialogCloseResult } from 'common/service/dialog.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo.dialog.html',
  styleUrl: './demo.dialog.scss',
  imports: [Button, TranslatePipe],
})
export class DemoDialog {
  protected dialogConfig = inject(DynamicDialogConfig);
  private dialogRef = inject(DynamicDialogRef);

  protected cancel() {
    this.dialogRef.close(DialogCloseResult.CANCELLED);
  }

  protected save() {
    this.dialogRef.close(DialogCloseResult.SUCCEED);
  }
}
