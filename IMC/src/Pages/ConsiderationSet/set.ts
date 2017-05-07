import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'set',
  templateUrl: './set.html',
  styleUrls: ['./set.css']
})
export class ConsiderationSet {
  mystack = [];
  constructor(public af : AF){
    this.af.af.auth.subscribe((data) => {
      this.af.marketers = data ? this.af.af.database.object('marketers/' + data.uid) : null;
      this.af.marketers.subscribe((data) => {
        console.log(data);
        this.mystack = data.MartechStack ? data.MartechStack : [];
      });
    });
  }
  delete(name) : void{
    for(var i = 0; i < this.mystack.length; i ++){
      if(this.mystack[i].name == name){
        this.mystack.splice(i, 1);
        this.af.DeleteTech(this.mystack);
        return ;
      }
    }
  }


}
