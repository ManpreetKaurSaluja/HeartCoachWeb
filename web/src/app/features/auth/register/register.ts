import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true, selector: 'hc-register', imports: [CommonModule, FormsModule],
  template: `
  <h2>Create account</h2>
  <form (ngSubmit)="submit()" #f="ngForm" class="card">
    <label>Name <input name="name" [(ngModel)]="name" required/></label>
    <label>Email <input name="email" type="email" [(ngModel)]="email" required/></label>
    <label>Phone <input name="phone" [(ngModel)]="phone" placeholder="91XXXXXXXXXX" required/></label>
    <button [disabled]="f.invalid">Continue</button>
  </form>`
})
export class Register {
  private router = inject(Router);
  name=''; email=''; phone='';
  submit() {
    localStorage.setItem('hc.email', this.email); // temporary until API
    this.router.navigate(['/auth/verify-otp']);
  }
}
