import { Component, NgModule} from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})

export class Product{
  rate : number = 4.5;
}
