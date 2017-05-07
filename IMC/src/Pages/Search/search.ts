import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchPage {

  result = [
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Salesforce",
     "description" : "Salesforce is a big company"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Google",
     "description" : "Google is a big company"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Facebook",
     "description" : "Facebook is a big company"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "IBM",
     "description" : "IBM is a big company"
    }
  ];
  mystack = [];
  public profile : any;

  constructor(public af : AF){
    this.af.af.auth.subscribe((data) => {
      this.af.marketers = data ? this.af.af.database.object('marketers/' + data.uid) : null;
      this.af.marketers.subscribe((data) => {
        console.log(data);
        this.mystack = data.MartechStack ? data.MartechStack : [];
      });
    });
  }


  AddTech(name) : void{
    for(var i = 0; i < this.result.length; i ++){
      if(this.result[i].name == name){
        let temp = this.result[i];
        this.af.AddTech(temp);
        this.result.splice(i, 1);
        return ;
      }
    }
    return ;
  }

  navigator(){
    window.location.assign('marprofile');
  }

}
