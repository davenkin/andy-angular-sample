import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Button, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private router: Router) {
  }

  check() {
    this.router.navigate(['hello']);
  }

  check1() {
    this.router.navigate(['public/hello']);
  }

  check2() {
    this.router.navigate(['public/hello1']);
  }
}
