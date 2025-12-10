import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FeatureToggleService {
  public isFeatureEnabled(feature: string): boolean {
    return !!feature; // todo: implement your own feature toggling logic
  }
}
