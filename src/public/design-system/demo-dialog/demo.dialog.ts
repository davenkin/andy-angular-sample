import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo.dialog.html',
  styleUrl: './demo.dialog.scss',
})
export class DemoDialog {
  protected dialogConfig = inject(DynamicDialogConfig);
  protected dialogRef = inject(DynamicDialogRef);
}
