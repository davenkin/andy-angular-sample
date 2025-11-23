import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  // todo:
  @Input() name: string = '';
  @Input() alt: string = 'icon';
}
