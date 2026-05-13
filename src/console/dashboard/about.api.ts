import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AboutInfo {
  status: string;
  fetchTime: string;
}

@Injectable({
  providedIn: 'root',
})
export class AboutApi {
  private httpClient = inject(HttpClient);

  public about() {
    return this.httpClient.get<AboutInfo>('http://localhost:5125/about');
  }
}
