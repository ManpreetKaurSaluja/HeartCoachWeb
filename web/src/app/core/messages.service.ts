import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessageDto } from '../shared/model';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private base = environment.apiBase;
  constructor(private http: HttpClient) {}

  send(text: string) {
    return this.http.post(`${this.base}/messages/send`, { text });
  }

  list(since?: string) {
    const params = since ? new HttpParams().set('since', since) : undefined;
    return this.http.get<MessageDto[]>(`${this.base}/messages`, { params });
  }
}
