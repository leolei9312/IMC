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
    {"name" : '1', "value" : 'Audience Segmentation', 'ischecked' : false},
    {"name" : '2', "value" : 'Customer Journey Mapping', 'ischecked' : false},
    {"name" : '3', "value" : 'Lead Generation', 'ischecked' : false},
    {"name" : '4', "value" : 'Content Development', 'ischecked' : false},
    {"name" : '5', "value" : 'Email Automation', 'ischecked' : false},
    {"name" : '6', "value" : 'Multi-channel Campaign Management', 'ischecked' : false},
  ];
  stage1 = [
    {
      "img" : "assets/img/edit.png",
      "title" : "Planning",
      "Description" : "Creating a marketing campaign plan and schedule.",
      "ischecked" : false,
      "value" : "Planning",
      "id" : 0
    },
    {
      "img" : "assets/img/execution.png",
      "title" : "Execution",
      "Description" : "Having the marketing campaign start getting executed. IMPLEMENTATION",
      "ischecked" : false,
      "value" : "Execution",
      "id" : 1
    },
    {
      "img" : "assets/img/tracking.png",
      "title" : "Tracking",
      "Description" : "Monitoring the marketing campaign.",
      "ischecked" : false,
      "value" : "Tracking",
      "id" : 2
    },
    {
      "img" : "assets/img/analysis.png",
      "title" : "Analysis",
      "Description" : "Click here if you are doing Analysis in Campaign Management.Setting benchmarks and evaluating the marketing campaign performance.",
      "ischecked" : false,
      "value" : "Analysis",
      "id" : 3
    },
    {
      "img" : "assets/img/automation.png",
      "title" : "Marketing Automation",
      "Description" : "Using technologies to generate and personalize content to individuals.",
      "ischecked" : false,
      "value" : "Automation",
      "id" : 4
    }
  ];


  constructor(public af:AF ){

  }

  ClickStage1(id){
    this.stage1[id].ischecked = true;
  }

  SubmitMarketerProfile(form : NgForm){
    //for stage1
    let tempstage1 = [];
    for(var i = 0; i < this.stage1.length; i ++){
      if(this.stage1[i].ischecked) tempstage1.push(this.stage1[i]);
    }
    let tempstage2 = [];
    for(var i = 0; i < this.stage2.length; i ++){
      if(this.stage2[i].ischecked) tempstage2.push(this.stage2[i]);
    }
    let profile = {
      Stage1 : tempstage1,
      Stage2 : tempstage2,
      Stage3 : form.controls['budget'].value,
      Stage4 : form.controls['requirement'].value
    };
    this.af.SubmitMarketerProfile(profile);
  }
}
