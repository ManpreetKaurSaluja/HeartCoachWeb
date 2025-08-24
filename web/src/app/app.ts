import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Toast } from '../app/shared/toast/toast/toast'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Toast],
  styleUrl: './app.scss',
  template: `
  <main class="container">
    <router-outlet></router-outlet>
  </main>
  <nav class="tabbar">
    <a routerLink="/home">Home</a>
    <a routerLink="/vitals">Vitals</a>
    <a routerLink="/meds">Meds</a>
    <a routerLink="/messages">Chat</a>
  </nav>
  <app-toast></app-toast>
  `
})
export class App {
  protected readonly title = signal('web');
}
