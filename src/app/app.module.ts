import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroComponent }  from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {RoutingModule} from './routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
