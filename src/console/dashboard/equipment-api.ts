import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseId } from 'common/model/common.model';

export interface AboutInfo {
  status: string;
  fetchTime: string;
}

@Injectable({
  providedIn: 'root',
})
export class EquipmentApi {
  private httpClient = inject(HttpClient);

  public createEquipment() {
    return this.httpClient.post<ResponseId>('http://localhost:5125/equipments', { name: 'some name' });
  }
}
