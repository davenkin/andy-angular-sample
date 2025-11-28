import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { IconComponent } from 'common/component/icon/icon.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Button, IconComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {}
