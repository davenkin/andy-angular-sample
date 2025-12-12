import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Select, SelectChangeEvent } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { CurrentContextService, CurrentOrg } from 'common/service/current-context.service';
import { random } from 'lodash';

@Component({
  selector: 'app-org-switcher',
  templateUrl: './org-switcher.component.html',
  styleUrl: './org-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Select, FormsModule],
})
export class OrgSwitcherComponent implements OnInit {
  protected currentContextService = inject(CurrentContextService);
  protected orgs: CurrentOrg[] = [];

  ngOnInit(): void {
    // todo: user whatever means to load orgs to be selected
    let orgs = [
      {
        id: random(1, 10000).toFixed(0),
        name: '公司' + random(1, 10000).toFixed(0),
      },
    ];
    const currentOrg = this.currentContextService.org();
    if (currentOrg) {
      orgs = [currentOrg, ...orgs];
    }
    this.orgs = orgs;
  }

  protected changeOrg(event: SelectChangeEvent) {
    this.currentContextService.changeOrg(event.value as CurrentOrg);
  }
}
