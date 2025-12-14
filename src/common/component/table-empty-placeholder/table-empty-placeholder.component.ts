import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table-empty-placeholder',
  templateUrl: './table-empty-placeholder.component.html',
  styleUrl: './table-empty-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEmptyPlaceholderComponent {
  private translate = inject(TranslateService);
  message = input<string>(this.translate.instant('TABLE.EMPTY_PLACEHOLDER'));
}
