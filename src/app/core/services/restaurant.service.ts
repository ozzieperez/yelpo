import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRestaurant } from 'src/app/shared/models/restaurant.interface';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Array<IRestaurant> = [];

  constructor(public http: HttpClient) { }

  getRestaurants(): Observable<Array<IRestaurant>> {
    return this.http.get<Array<IRestaurant>>('../assets/data/restaurants.json').pipe(
      first() // no need to unsub
    );
  }

  getRestaurant(restaurantName: string)  {
    return this.http.get<Array<IRestaurant>>('../assets/data/restaurants.json').pipe(
      map(resp => {
        const filtered = resp.find(r => r.name === restaurantName);
        console.log('filtered', filtered);
        return filtered;
      }),
      first() // no need for unsub
    );
  }
}
