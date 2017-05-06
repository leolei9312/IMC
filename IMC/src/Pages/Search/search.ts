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
     "name" : "Salesforce"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Google"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Facebook"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "IBM"
    }
  ];
  mystack = [
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Salesforce"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Google"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Facebook"
    }
  ];
  public profile : any;
  constructor(public af : AF){
    console.log(this.af.marketers);
  }
}
