import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'venprofile',
  templateUrl: './venprofile.html',
  styleUrls: ['./venprofile.css']
})
export class VenProfile {
  products = [
    {"name" : "Google",
     "price" : 1000
    }
  ];
  NumProduct = 1;
  constructor(public af:AF ){

  }


}
