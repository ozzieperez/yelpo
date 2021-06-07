import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { IRestaurant } from 'src/app/shared/models/restaurant.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  name = '';
  details?: IRestaurant;


  constructor(private route: ActivatedRoute, public service: RestaurantService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(params => {
      this.name = params['name'];
      this.service.getRestaurant(this.name).subscribe(
        (resp) => {
          this.details = resp;
        }
      );
    });
  }

}
