import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-public-page-main',
  templateUrl: './public-page-main.component.html',
  styleUrl: './public-page-main.component.scss',
  imports: [RouterLink, ButtonLabel, ButtonDirective, RouterOutlet],
})
export class PublicPageMainComponent {
  get isDevelopment() {
    return environment.development;
  }
}
