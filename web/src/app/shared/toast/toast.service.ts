import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ToastService {
  message = signal<string>('');
  show(msg: string, ms = 2000) {
    this.message.set(msg);
    setTimeout(() => this.message.set(''), ms);
  }
}
