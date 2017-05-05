import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'marprofile',
  templateUrl: './marprofile.html',
  styleUrls: ['./marprofile.css']
})
export class MarProfile {
  test : string;
  stage2 = [
    {"name" : '1', "value" : '1', 'ischecked' : false},
    {"name" : '2', "value" : '2', 'ischecked' : false},
    {"name" : '3', "value" : '3', 'ischecked' : false},
    {"name" : '4', "value" : '4', 'ischecked' : false},
    {"name" : '5', "value" : '5', 'ischecked' : false},
    {"name" : '6', "value" : '6', 'ischecked' : false},
  ];
  stage1 = [
    {
      "img" : "http://renswijnmalen.nl/bootstrap/desktop_mobile.png",
      "title" : "Planning",
      "Description" : "Click here if you are Planning to do marketing work.",
      "ischecked" : false,
      "value" : "Planning",
      "id" : 1
    },
    {
      "img" : "http://renswijnmalen.nl/bootstrap/desktop_mobile.png",
      "title" : "Execution",
      "Description" : "Click here if you are doing Execution in Campaign Management.",
      "ischecked" : false,
      "value" : "Execution",
      "id" : 2
    },
    {
      "img" : "http://renswijnmalen.nl/bootstrap/desktop_mobile.png",
      "title" : "Tracking",
      "Description" : "Click here if you are doing Tracking in Campaign Management.",
      "ischecked" : false,
      "value" : "Tracking",
      "id" : 3
    },
    {
      "img" : "http://renswijnmalen.nl/bootstrap/desktop_mobile.png",
      "title" : "Analysis",
      "Description" : "Click here if you are doing Analysis in Campaign Management.",
      "ischecked" : false,
      "value" : "Analysis",
      "id" : 4
    },
  ];
  constructor(public af:AF){
    this.af.af.auth.subscribe((data) => {

    });
  }

  ClickStage1(id){
    this.stage1[id].ischecked = true;
  }

  SubmitProfile(form : NgForm){
    //for stage1
    let tempstage1 = [];
    for(var i = 0; i < this.stage1.length; i ++){
      if(this.stage1[i].ischecked) tempstage1.push(this.stage1[i]);
    }
    let tempstage2 = [];
    for(var i = 0; i < this.stage2.length; i ++){
      if(this.stage2[i].ischecked) tempstage2.push(this.stage2[i]);
    }
    console.log(tempstage1, tempstage2);
  }
}
