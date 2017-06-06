import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
