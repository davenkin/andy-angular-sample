import {Component, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Button} from 'primeng/button';
import {NgxSpinnerComponent, NgxSpinnerService} from 'ngx-spinner';
import {LoadingSpinnerComponent} from 'common/component/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-demo-home-page',
  imports: [
    RouterLink,
    Button,
    NgxSpinnerComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './demo-home.page.html',
  styleUrl: './demo-home.page.scss'
})
export class DemoHomePage {
  constructor(private spinner: NgxSpinnerService) {
  }

  show() {
    this.spinner.show('abc');
  }
}
