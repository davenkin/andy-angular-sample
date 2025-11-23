import {Injectable} from '@angular/core';
import {NgxSpinnerService, Spinner} from 'ngx-spinner';

export const GLOBAL_SPINNER = 'GLOBAL_SPINNER';
export const CONSOLE_MAIN_SPINNER = 'CONSOLE_MAIN_SPINNER';

export interface SpinnerConfig {
  transparentBackground?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) {
  }

  public showGlobalSpinner(config?: SpinnerConfig) {
    this.spinner.show(GLOBAL_SPINNER, {bdColor: config?.transparentBackground ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.3)'});
  }

  public hideGlobalSpinner() {
    this.spinner.hide(GLOBAL_SPINNER);
  }

  public showConsoleMainSpinner(config?: SpinnerConfig) {
    this.spinner.show(CONSOLE_MAIN_SPINNER, {bdColor: config?.transparentBackground ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.3)'});
  }

  public hideConsoleMainSpinner() {
    this.spinner.hide(CONSOLE_MAIN_SPINNER);
  }

  public show(spinnerName: string, spinner?: Spinner) {
    this.spinner.show(spinnerName, spinner);
  }

  public hide(spinnerName: string) {
    this.spinner.hide(spinnerName);
  }
}
