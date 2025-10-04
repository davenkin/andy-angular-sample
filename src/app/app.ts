import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HelloWorld} from '@davenkin/angular-library-sample';
import {Button} from 'primeng/button';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HelloWorld, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private keycloak: Keycloak) {
  }

  check() {
    console.info(this.keycloak.isTokenExpired());
  }
}
