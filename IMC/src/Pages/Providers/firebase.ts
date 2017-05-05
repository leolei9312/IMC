import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Home } from '../Home/home';
import { MarProfile } from '../MarProfile/marprofile';
import { Router } from '@angular/router';
@Injectable()
export class AF {
  public marketers: FirebaseObjectObservable<any>;
  uid : string
  constructor(public af: AngularFire, public router : Router) {
    this.af.auth.subscribe((data) => {
      console.log(data);
      this.uid = data.uid;
    });
  }

  //add new or read marketers to database
  AddMarketer(form:any){
    this.af.auth.createUser({ email: form.controls['email'].value, password: form.controls['psw'].value }).then(success => {
      this.marketers = this.af.database.object('marketers/' + success.uid);
      this.marketers.subscribe((obj) => {
          let newMarketer = {
            Email: form.controls['email'].value,
            Name: form.controls['name'].value,
            Company: form.controls['company'].value,
            TeamSize: form.controls['teamsize'].value,
            Industry: form.controls['industry'] ? form.controls['industry'].value : '',
            Type: form.controls['type'] ? form.controls['type'].value : '',
            Stage1 : [''],
            Stage2 : [''],
            Stage3 : 0,
            Stage4 : ""
          };
          this.marketers.update(newMarketer).then(success=>{
            this.router.navigate(['/marprofile']);
          }, error=>{
            console.log(error);
          });
      });
      }, err => {
        alert('This Email has been used.');
      });

  }
  //add new vendors to database
  AddVendor(form:any){
    this.af.auth.createUser({ email: form.controls['email'].value, password: form.controls['psw'].value }).then(success => {
      this.marketers = this.af.database.object('vendors/' + success.uid);
      this.marketers.subscribe((obj) => {
          let newVendor = {
            Email: form.controls['email'].value,
            Name: form.controls['name'].value,
            Company: form.controls['company'].value,
            TeamSize: form.controls['teamsize'].value,
            Industry: form.controls['industry'] ? form.controls['industry'].value : '',
            Type: form.controls['type'] ? form.controls['type'].value : ''
          };
          this.marketers.update(newVendor).then(success=>{
            console.log(success);
            this.router.navigate(['/marprofile']);
          }, error=>{
            console.log(error);
          });
      });
      }, err => {
        alert('This Email has been used.');
      });
  }

  checkMarketer(form:any){
    this.af.auth.login({ email: form.controls['email'].value, password: form.controls['psw'].value }).then(success => {
      console.log('success');
      this.router.navigate(['/marprofile']);
    }, err => {
      alert('Email or Password is incorrect.');
    });
  }

  checkVendor(form:any){
    this.af.auth.login({ email: form.controls['email'].value, password: form.controls['psw'].value}).then(success => {
      console.log('success');
      this.router.navigate(['/marprofile']);
    }, err => {
      alert('Email or Password is incorrect.');
    });
  }

  logout(){
    this.af.auth.logout().then(success => {
      this.router.navigate(['/home']);
    });
  }

  SubmitProfile(){

  }

}
