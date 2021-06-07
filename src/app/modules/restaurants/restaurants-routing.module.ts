import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { RestaurantsComponent } from './restaurants.component';

const routes: Routes = [
  { 
    path: '',
    component: RestaurantsComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'detail/:name',
        component: DetailComponent
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
