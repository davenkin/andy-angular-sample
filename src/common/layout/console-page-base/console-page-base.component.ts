import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentContextService, CurrentOrg } from 'common/service/current-context.service';
import { SpinnerService } from 'common/service/spinner.service';
import { random } from 'lodash';
import { finalize, take, timer } from 'rxjs';

@Component({
  selector: 'app-console-page-base',
  templateUrl: './console-page-base.component.html',
  imports: [RouterOutlet],
  styleUrl: './console-page-base.component.scss',
})
export class ConsolePageBaseComponent implements OnInit {
  private currentContextService = inject(CurrentContextService);
  private spinnerService = inject(SpinnerService);
  protected ready = signal(false);

  ngOnInit(): void {
    if (this.currentContextService.isSuperAdminUser()) {
      this.loadCurrentOrgFromLocalStorage();
    } else {
      this.loadCurrentOrgFromServer();
    }
  }

  private loadCurrentOrgFromLocalStorage() {
    const currentOrg = JSON.parse(localStorage.getItem(this.currentContextService.ORG_KEY) || 'null') as CurrentOrg;
    if (currentOrg) {
      this.currentContextService.changeOrg(currentOrg, false);
    }
    this.ready.set(true);
  }

  private loadCurrentOrgFromServer() {
    this.spinnerService.showGlobalSpinner();

    //todo: call real backend api to get the user's org info call this.currentContextService.changeOrg() to change the org
    timer(1000)
      .pipe(
        take(1),
        finalize(() => {
          this.spinnerService.hideGlobalSpinner();
        }),
      )
      .subscribe(() => {
        this.currentContextService.changeOrg({ id: '12345', name: '永丰公司' + random(1, 10) }, false);
        this.ready.set(true);
      });
  }
}
