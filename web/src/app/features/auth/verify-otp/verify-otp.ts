import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true, selector:'hc-verify-otp', imports:[CommonModule, FormsModule],
  template: `
  <h2>Verify OTP</h2>
  <p>We sent a 6-digit code to <b>{{email}}</b></p>
  <div style="display:flex;gap:8px">
    <input maxlength="6" [(ngModel)]="code" placeholder="123456"/>
    <button (click)="ok()" [disabled]="code.length!==6">Verify</button>
  </div>`
})
export class VerifyOtp {
private router = inject(Router);
  email = localStorage.getItem('hc.email') ?? '';
  code=''; ok(){ localStorage.setItem('hc.access','dev-token'); this.router.navigate(['/home']); }
}