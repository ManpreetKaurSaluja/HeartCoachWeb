import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Med } from '../shared/model';

@Injectable({ providedIn: 'root' })
export class MedsService {
  private base = environment.apiBase;
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Med[]>(`${this.base}/patients/me/medications`);
  }

  markTaken(medId: string) {
    return this.http.post(`${this.base}/medications/${medId}/taken`, {});
  }
}
