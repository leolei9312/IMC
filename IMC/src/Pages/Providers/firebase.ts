import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Home } from '../Home/home';
import { MarProfile } from '../MarProfile/marprofile';
import { Router } from '@angular/router';
@Injectable()
export class AF {
  public marketers: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire, public router : Router) {
  }

  //add new or read marketers to database
  AddMarketer(form:any){
    this.marketers = this.af.database.object('marketers/' + form.controls['name'].value);
    this.marketers.subscribe((obj) => {
      if(!obj.$exists()){
        let newMarketer = {
          Email: form.controls['email'].value,
          Name: form.controls['name'].value,
          Company: form.controls['company'].value,
          TeamSize: form.controls['teamsize'].value,
          Industry: form.controls['industry'] ? form.controls['industry'].value : '',
          Type: form.controls['type'] ? form.controls['type'].value : '',
          Password: form.controls['psw'].value
        };
        this.marketers.update(newMarketer).then(success=>{
          console.log(success);
          this.router.navigate(['/marprofile']);
        }, error=>{
          console.log(error);
        });
      }

    });
  }
  //add new vendors to database
  AddVendor(form:any){
    this.marketers = this.af.database.object('vendors/' + form.controls['name'].value);
    this.marketers.subscribe((obj) => {
      if(!obj.$exists()){
        let newVendor = {
          Email: form.controls['email'].value,
          Name: form.controls['name'].value,
          Company: form.controls['company'].value,
          TeamSize: form.controls['teamsize'].value,
          Industry: form.controls['industry'] ? form.controls['industry'].value : '',
          Type: form.controls['type'] ? form.controls['type'].value : '',
          Password: form.controls['psw'].value
        };
        this.marketers.update(newVendor).then(success=>{
          console.log(success);
          this.router.navigate(['/venprofile']);
        }, error=>{
          console.log(error);
        });
      }

    });
  }

  MarketerSignIn(){

  }

  VendorSignIn(){
    
  }

}
