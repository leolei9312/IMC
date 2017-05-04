import { Component} from '@angular/core';
import { AF } from '../Pages/Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogin : boolean;
  public marlogin : string = "Marketer Login";
  public venlogin : string = "Vendor Login";
  public profile : string = "Profile";

  constructor(public af : AF){
    this.af.af.auth.subscribe((data) => {
      if(data) this.isLogin = true;
      else this.isLogin = false;
    });
  }

  onMarketerSignIn(form:NgForm){
    this.af.checkMarketer(form);
  }
  
  onVendorSignIn(form:NgForm){
    this.af.checkVendor(form);
  }
  logout(){
    this.af.logout();
  }
}
