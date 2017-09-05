import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BasketComponent } from './components/basket/basket.component';
import { GoodsComponent } from './components/goods/goods.component';
import { MaineComponent } from './view/maine/maine.component';
import { PagenotfoundComponent } from './view/pagenotfound/pagenotfound.component';

import { RouterModule } from "@angular/router";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataMemory } from './memory/data-memory.component';
import { DataService } from "./service/data.service";
import {BasketService} from "./service/basket.service";

const RouterConfig = [
  { path: '', component: MaineComponent },
  { path: 'basket', component: BasketComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasketComponent,
    GoodsComponent,
    MaineComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot( DataMemory ),
    RouterModule.forRoot( RouterConfig )
  ],
  providers: [ DataService, BasketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
