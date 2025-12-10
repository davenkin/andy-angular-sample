import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  private _refreshWholeAppNeeded = signal(true);
  public refreshWholeAppNeeded = this._refreshWholeAppNeeded.asReadonly();

  public refreshWholeApp() {
    this._refreshWholeAppNeeded.set(false);
    setTimeout(() => {
      this._refreshWholeAppNeeded.set(true);
    });
  }
}
