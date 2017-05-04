import { AF } from '../Providers/firebase';
import { Component, NgModule} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home{
  public form : NgForm;
  public isLogin : boolean;
  constructor(public af : AF){
  this.af.af.auth.subscribe((data) => {
    if(data) this.isLogin = true;
    else this.isLogin = false;
  });
  }
  onMarketerSubmit(form: NgForm) {
    this.af.AddMarketer(form);
  }
  onVendorSubmit(form: NgForm) {
    this.af.AddVendor(form);
  }

}
