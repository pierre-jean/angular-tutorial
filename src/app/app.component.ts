import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `<h1>Tour of heroes</h1>
  <h2>{{hero.name}} details!</h2>`,
})
export class AppComponent  { hero: Hero = { id: 1, name: 'Windstorm' }; }
