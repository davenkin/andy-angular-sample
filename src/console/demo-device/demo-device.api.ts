import {PagedQuery} from 'common/utils/pagination.utils';
import {CpuArchitecture, OsType} from 'common/model/common.model';

export interface DemoDevicePagedQuery extends PagedQuery {
  osType?: OsType;
  cpuArchitecture?: CpuArchitecture;
}

export interface QPagedDemoDevice {
  id: string;
  name: string;
  osType: OsType;
  cpuArchitecture: CpuArchitecture;
  createdAt: string;
}
