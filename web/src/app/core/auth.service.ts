import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterReq, VerifyReq, Tokens } from '../shared/model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = environment.apiBase;
  accessToken = signal<string | null>(localStorage.getItem('hc.access'));
  email = signal<string | null>(localStorage.getItem('hc.email'));

  constructor(private http: HttpClient) {}

  register(body: RegisterReq) {
    localStorage.setItem('hc.email', body.email);
    this.email.set(body.email);
    return this.http.post(`${this.base}/auth/register`, body);
  }

  verify(req: VerifyReq) {
    return this.http.post<Tokens>(`${this.base}/auth/verify-otp`, req);
  }

  setTokens(t: Tokens) {
    localStorage.setItem('hc.access', t.accessToken);
    localStorage.setItem('hc.refresh', t.refreshToken);
    this.accessToken.set(t.accessToken);
  }

  logout() {
    localStorage.removeItem('hc.access');
    localStorage.removeItem('hc.refresh');
    this.accessToken.set(null);
  }
}
