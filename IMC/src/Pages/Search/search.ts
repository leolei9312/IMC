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
    {"icon" : "./assets/img/epictrack.png",
     "name" : "Epictrack"
    },
    {"icon" : "./assets/img/mailchimp.png",
     "name" : "Mailchimp"
    },
    {"icon" : "./assets/img/marketo.jpg",
     "name" : "Marketo"
    },
    {"icon" : "./assets/img/optimizely.png",
     "name" : "Optimizely"
    }
  ];
  mystack = [];
  public profile : any;
  public showresult : boolean = false;

  constructor(public af : AF){
    this.af.af.auth.subscribe((data) => {
      this.af.marketers = data ? this.af.af.database.object('marketers/' + data.uid) : null;
      this.af.marketers.subscribe((data) => {
        console.log(data);
        this.mystack = data.MartechStack ? data.MartechStack : [];
      });
    });
  }
  show(){
    this.showresult = true;
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
