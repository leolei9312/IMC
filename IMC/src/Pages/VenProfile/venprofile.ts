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
    {
     "id" : 1
    }
  ];

  stage = [
    {
      "title" : "Planning",
      "ischecked" : false,
      "value" : "Planning",
      "id" : 0
    },
    {
      "title" : "Execution",
      "ischecked" : false,
      "value" : "Execution",
      "id" : 1
    },
    {
      "title" : "Tracking",
      "ischecked" : false,
      "value" : "Tracking",
      "id" : 2
    },
    {
      "title" : "Analysis",
      "ischecked" : false,
      "value" : "Analysis",
      "id" : 3
    },
  ];

  concerns = [
    {"name" : '1', "value" : 'Audience Segmentation', 'ischecked' : false},
    {"name" : '2', "value" : 'Customer Journey Mapping', 'ischecked' : false},
    {"name" : '3', "value" : 'Lead Generation', 'ischecked' : false},
    {"name" : '4', "value" : 'Content Development', 'ischecked' : false},
    {"name" : '5', "value" : 'Email Automation', 'ischecked' : false},
    {"name" : '6', "value" : 'Multi-channel Campaign Management', 'ischecked' : false},
  ];

  NumProduct = 1;
  constructor(public af:AF ){
    console.log(this.stage);
  }

  SubmitVendorProduct(form){
    console.log(this.stage, this.concerns);
  }
  CreateNewProduct(){
    this.NumProduct ++;
    let newproduct = {
      id : this.NumProduct
    }
    this.products.push(newproduct);
  }

}
