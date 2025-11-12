import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-demo-home-page',
  imports: [
    RouterLink,
    Button
  ],
  templateUrl: './demo-home.page.html',
  styleUrl: './demo-home.page.scss'
})
export class DemoHomePage {
}
