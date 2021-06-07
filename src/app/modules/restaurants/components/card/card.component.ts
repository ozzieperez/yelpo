import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRestaurant } from 'src/app/shared/models/restaurant.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  @Input() restaurant?: IRestaurant;

  viewDetails() {
    this.router.navigate(['detail', this.restaurant?.name], { relativeTo: this.route.parent });
  }

}
