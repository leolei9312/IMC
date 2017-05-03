import { Component } from '@angular/core';
import { AF } from '../Pages/Providers/firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogin : boolean = false;
  public marlogin : string = "Marketer Login";
  public venlogin : string = "Vendor Login";
  public profile : string = "Profile";
  constructor(public af : AF){
    //console.log(this.af.marketers);
  }
}
