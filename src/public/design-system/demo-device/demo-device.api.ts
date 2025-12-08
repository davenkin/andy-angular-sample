import { Injectable } from '@angular/core';
import { CpuArchitecture, OsType } from 'common/model/common.model';
import { PagedResponse, PageQuery } from 'common/utils/pagination.utils';
import { randomOf } from 'common/utils/common.utils';
import { Observable, of } from 'rxjs';

export interface QListedDemoDevice {
  id: string;
  name: string;
  osType: OsType;
  cpuArchitecture: CpuArchitecture;
}

export interface ListDemoDevicesQuery extends PageQuery {
  osType?: OsType;
  cpuArchitecture?: CpuArchitecture;
}

@Injectable({
  providedIn: 'root',
})
export class DemoDeviceApi {
  private fakeDevices: QListedDemoDevice[] = this.buildFakeDevices();

  public fetchListedDemoDevices(query: ListDemoDevicesQuery): Observable<PagedResponse<QListedDemoDevice>> {
    const devices = this.fakeDevices.slice(query.pageNumber * query.pageSize, (query.pageNumber + 1) * query.pageSize);
    return of({
      content: devices,
      totalElements: this.fakeDevices.length,
      totalPages: Math.ceil(this.fakeDevices.length / query.pageSize),
      pageNumber: query.pageNumber,
      pageSize: query.pageSize,
    });
  }

  private buildFakeDevices() {
    const allOsTypes = Object.values(OsType);
    const allCpuArchitectures = Object.values(CpuArchitecture);
    const devices: QListedDemoDevice[] = [...Array(500)].map(({ index }) => {
      return {
        id: 'device_' + index,
        name: 'Device ' + index,
        osType: randomOf(allOsTypes),
        cpuArchitecture: randomOf(allCpuArchitectures),
      };
    });
    return devices;
  }
}
