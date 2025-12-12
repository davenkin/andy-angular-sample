import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { CurrentContextService } from 'common/service/current-context.service';

@Component({
  selector: 'app-public-page-main',
  templateUrl: './public-page-main.component.html',
  styleUrl: './public-page-main.component.scss',
  imports: [RouterLink, ButtonLabel, ButtonDirective, RouterOutlet],
})
export class PublicPageMainComponent {
  protected router = inject(Router);
  protected currentContextService = inject(CurrentContextService);
}
