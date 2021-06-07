import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { IRestaurant } from 'src/app/shared/models/restaurant.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  restaurants: Array<IRestaurant> = [];

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (resp: Array<IRestaurant>) => {
        this.restaurants = this.restaurantService.restaurants = resp;
        console.log('restaurants', resp);
      }
    );
  }

  filter(event: any) {
    let filtered = this.restaurantService.restaurants.filter(r => {
      return r.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    if (filtered) {
      this.restaurants = filtered;
    }
  }
}
