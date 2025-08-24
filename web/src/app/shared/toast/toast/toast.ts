import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
standalone: true,
  imports: [CommonModule],
  template: `<div class="toast" *ngIf="msg()">{{ msg() }}</div>`,
  styles: [`.toast{position:fixed;left:50%;bottom:80px;transform:translateX(-50%);
            background:#111;color:#fff;padding:10px 14px;border-radius:12px;box-shadow:0 4px 16px #0003}`]
})
export class Toast {
  private t = inject(ToastService);
  msg = computed(() => this.t.message());
}
