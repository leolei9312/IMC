import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Home } from '../Home/home';
import { MarProfile } from '../MarProfile/marprofile';
import { Router } from '@angular/router';
@Injectable()
export class AF {
  public marketers: FirebaseObjectObservable<any>;
  public vendors: FirebaseObjectObservable<any>;
  uid : string;
  constructor(public af: AngularFire, public router : Router) {

    this.af.auth.subscribe((data) => {
      this.marketers = data ? this.af.database.object('marketers/' + data.uid) : null;
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
            Stage4 : "",
            MartechStack : []
          };
          this.marketers.update(newMarketer).then(success=>{
            this.router.navigate(['home']);
            window.setTimeout(function(){window.location.assign("search")}, 1000);
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
      this.vendors = this.af.database.object('vendors/' + success.uid);
      this.vendors.subscribe((obj) => {
          let newVendor = {
            Email: form.controls['email'].value,
            Name: form.controls['name'].value,
            Company: form.controls['company'].value,
            TeamSize: form.controls['teamsize'].value,
            Industry: form.controls['industry'] ? form.controls['industry'].value : '',
            Type: form.controls['type'] ? form.controls['type'].value : ''
          };
          this.vendors.update(newVendor).then(success=>{
            this.router.navigate(['home']);
            window.setTimeout(function(){window.location.assign("search")}, 1000);
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
      this.router.navigate(['home']);
      window.setTimeout(function(){window.location.assign("search")}, 1000);
    }, err => {
      alert('Email or Password is incorrect.');
    });
  }

  checkVendor(form:any){
    this.af.auth.login({ email: form.controls['email'].value, password: form.controls['psw'].value}).then(success => {
      this.router.navigate(['home']);
      window.setTimeout(function(){window.location.assign("search")}, 1000);
    }, err => {
      alert('Email or Password is incorrect.');
    });
  }

  logout(){
    this.af.auth.logout().then(success => {
      this.router.navigate(['home']);
    });
  }

  SubmitMarketerProfile(profile : any){
    // this.marketers = this.af.database.object('marketers/' + this.uid);
    // this.marketers.update(profile).then(success=>{
    //   this.router.navigate(['considerationset']);
    // }, error=>{
    //   console.log(error);
    // });
    this.router.navigate(['matchpage']);
  }

  AddTech(newTech){
    let temp = {MartechStack : []};
    this.marketers.subscribe((data) => {
      temp.MartechStack = data.MartechStack ?  data.MartechStack : [];
      temp.MartechStack.push(newTech);
    });
    this.marketers.update(temp);
  }

  DeleteTech(mystack){
    let temp = {MartechStack : mystack};
    this.marketers.update(temp);
  }



}
