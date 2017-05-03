import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'landingpage',
  templateUrl: './landingpage.html',
  styleUrls: ['./landingpage.css']
})

export class LandingPage {

  constructor(){

  }

  onFormSubmit(form: NgForm) {
    console.log('Name:' + form.controls['name'].value);
    console.log('Email:' + form.controls['email'].value);
    console.log('Company:' + form.controls['company'].value);
    console.log('TeamSize:' + form.controls['teamsize'].value);
    if(form.controls['industry']) console.log('Industry:' + form.controls['industry'].value);
    if(form.controls['type']) console.log('Type:' + form.controls['type'].value);
  }
  
}
