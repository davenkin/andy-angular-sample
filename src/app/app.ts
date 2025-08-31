import {Component, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {DatePicker} from 'primeng/datepicker';
import {FormsModule} from '@angular/forms';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  imports: [Button, FormsModule, DatePicker, IconField, InputIcon, InputText],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('andy-angular-sample');
  date: Array<Date | null> = [];

  ha() {
    console.info('hello');
  }
}
