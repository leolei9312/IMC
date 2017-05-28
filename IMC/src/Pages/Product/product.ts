import { Component, NgModule} from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})

export class Product{
  features : number = 4.5;
  service : number = 4;
  integration : number = 3.5
}
