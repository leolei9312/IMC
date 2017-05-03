import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin : boolean = false;
  marlogin : string = "Marketer Login";
  venlogin : string = "Vendor Login";
  profile : string = "Profile";
  constructor(){
    console.log(this.isLogin);
  }
}
