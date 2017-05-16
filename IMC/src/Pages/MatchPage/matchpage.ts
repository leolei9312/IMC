import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';

@Component({
  selector: 'matchpage',
  templateUrl: './matchpage.html',
  styleUrls: ['./matchpage.css']
})
export class MatchPage {
  results = [
    {
      "name" : "Google",
      "icon" : "glyphicon glyphicon-home"
    },
    {
      "name" : "Facebook",
      "icon" : "glyphicon glyphicon-home"
    },
    {
      "name" : "IBM Watson",
      "icon" : "glyphicon glyphicon-home"
    },
    {
      "name" : "Salesforce",
      "icon" : "glyphicon glyphicon-home"
    },
    {
      "name" : "Adobe",
      "icon" : "glyphicon glyphicon-home"
    }
  ];
  mystack = [];
  constructor(public af:AF ){
    this.af.af.auth.subscribe((data) => {
      this.af.marketers = data ? this.af.af.database.object('marketers/' + data.uid) : null;
      this.af.marketers.subscribe((data) => {
        console.log(data);
        this.mystack = data.MartechStack ? data.MartechStack : [];
      });
    });
  }

  AddTech(name) : void{
    for(var i = 0; i < this.results.length; i ++){
      if(this.results[i].name == name){
        let temp = this.results[i];
        this.af.AddTech(temp);
        this.results.splice(i, 1);
        return ;
      }
    }
    return ;
  }


}
