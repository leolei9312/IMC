import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
const URL = 'http://evening-anchorage-3159.herokuapp.com/api/';

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
  {"name" : '1', "value" : 'Audience Segmentation', 'ischecked' : false,
   'tooltip' : '1. Task Workflows Design. 2. Customer Targeting. 3. Multi-channel Campaign Planning. 4. Publish Scheduling.'
  },
  {"name" : '2', "value" : 'Customer Journey Mapping', 'ischecked' : false,
   'tooltip' : '1. Multi-channel Communications. 2. Content Management. 3. Influencer Marketing. 4. SEO Management. 5. Social Media Marketing. 6. Mobile Marketing. 7. Email Marketing.'
  },
  {"name" : '3', "value" : 'Lead Generation', 'ischecked' : false,
   'tooltip' : '1. Campaign Process Tracking/ Monitoring. 2. Budget Tracking.'
  },
  {"name" : '4', "value" : 'Content Development', 'ischecked' : false,
   'tooltip' : '1. Benchmarking. 2. Data Exchange (Customer/ Campaign Data). 3. Conversion Tracking.'
  },
  {"name" : '5', "value" : 'Email Automation', 'ischecked' : false,
   'tooltip' : '1. Website/ Email Personalization. 2. Lead Scoring. 3. Campaign Testing. 4. Event Triggering.'
  },
  {"name" : '6', "value" : 'Multi-channel Campaign Management', 'ischecked' : false,
   'tooltip' : '6'
  }
  ];
  public uploader:FileUploader = new FileUploader({url:URL});

  NumProduct = 1;
  constructor(public af:AF ){
    console.log(this.stage);
  }

  SubmitVendorProduct(form){
    //this.af.router.navigate();
  }

  CreateNewProduct(){
    this.NumProduct ++;
    let newproduct = {
      id : this.NumProduct
    }
    this.products.push(newproduct);
  }

}
