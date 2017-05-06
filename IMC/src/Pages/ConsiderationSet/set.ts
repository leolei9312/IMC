import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'set',
  templateUrl: './set.html',
  styleUrls: ['./set.css']
})
export class ConsiderationSet {
  mystack = [
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Salesforce",
     "description" : "Salesforce is a big company.",
     "link" : "https://www.salesforce.com"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Google",
     "description" : "Google is a big company.",
     "link" : "https://www.google.com"
    },
    {"icon" : "glyphicon glyphicon-home",
     "name" : "Facebook",
     "description" : "Facebook is a big company.",
     "link" : "https://www.facebook.com"
    }
  ];
  constructor(public af : AF){

  }
}
