import { Routes } from '@angular/router';
import { Register } from '../app/features/auth/register/register';
import { VerifyOtp } from '../app/features/auth/verify-otp/verify-otp';
import { Chat } from '../app/features/messages/chat/chat';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/register', pathMatch: 'full' },
  { path: 'auth/register', component: Register },
  { path: 'auth/verify-otp', component: VerifyOtp },
  { path: 'messages', component: Chat},
  { path: '**', redirectTo: 'auth/register' }
];
