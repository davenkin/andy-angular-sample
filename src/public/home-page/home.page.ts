import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Button} from 'primeng/button';
import {SpinnerService} from 'common/service/spinner.service';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    Button
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  constructor(protected spinnerService: SpinnerService) {
  }

  showGlobalSpinner() {
    this.spinnerService.showGlobalSpinner();
  }
}
