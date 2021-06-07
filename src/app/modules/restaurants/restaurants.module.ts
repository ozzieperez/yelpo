import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    CardComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ],
  exports: [CardComponent]
})
export class RestaurantsModule { }
