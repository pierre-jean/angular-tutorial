import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div><label>name: </label> <input [(ngModel)]="selectedHero.name" placeholder="name" /></div>
      <button (click)="goBack()">Back</button>
    </div>`
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero: Hero;

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.selectedHero = hero);
  }

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
