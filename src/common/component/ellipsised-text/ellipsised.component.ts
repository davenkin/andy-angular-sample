import { ChangeDetectionStrategy, Component, ElementRef, input, viewChild } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-ellipsised',
  templateUrl: './ellipsised.component.html',
  styleUrl: './ellipsised.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Tooltip],
  host: {
    class: 'u-focus-visible-ring',
  },
})
export class EllipsisedComponent {
  showToolTip = input<boolean>(true);
  contentWrapper = viewChild<ElementRef>('contentWrapper');

  get isEllipsised(): boolean {
    if (this.contentWrapper()) {
      return this.contentWrapper()?.nativeElement.clientWidth < this.contentWrapper()?.nativeElement.scrollWidth;
    }
    return false;
  }

  get content() {
    if (this.contentWrapper()) {
      return this.contentWrapper()?.nativeElement.textContent;
    }
  }
}
