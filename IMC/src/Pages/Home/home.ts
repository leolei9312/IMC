import { AF } from '../Providers/firebase';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home{
  public form : NgForm;

  constructor(public af : AF){
  }
  onMarketerSubmit(form: NgForm) {
    this.af.AddMarketer(form);
  }
  onVendorSubmit(form: NgForm) {
    this.af.AddVendor(form);
  }
}
