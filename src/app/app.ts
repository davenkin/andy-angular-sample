import {Component, DestroyRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HelloWorld} from '@davenkin/angular-library-sample';
import {Button} from 'primeng/button';
import {GuardsCheckStart, Router, RouterOutlet} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HelloWorld, Button, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private router: Router, private destroyRef: DestroyRef) {
    router.events.pipe(takeUntilDestroyed(destroyRef)).subscribe(event => {
      if (event instanceof GuardsCheckStart) {
        if (event.url.startsWith('/public')) {
          console.info(event);
          // todo: check if user i logged in, if not do login
        }
      }
    });
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
