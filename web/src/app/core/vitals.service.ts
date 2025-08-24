import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { VitalEntry } from '../shared/model'

@Injectable({ providedIn: 'root' })
export class VitalsService {
  private base = environment.apiBase;
  constructor(private http: HttpClient) {}

  create(entry: VitalEntry) {
    return this.http.post(`${this.base}/patients/me/vitals`, entry);
  }

  list(type?: string, from?: string, to?: string) {
    let params = new HttpParams();
    if (type) params = params.set('type', type);
    if (from) params = params.set('from', from);
    if (to) params = params.set('to', to);
    return this.http.get<VitalEntry[]>(`${this.base}/patients/me/vitals`, { params });
  }
}
