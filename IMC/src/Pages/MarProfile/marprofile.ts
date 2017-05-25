import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'marprofile',
  templateUrl: './marprofile.html',
  styleUrls: ['./marprofile.css']
})
export class MarProfile {
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
      "Description" : "Having the marketing campaign start getting executed.",
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

  sub = [
    [
      {
        "name" : "Task Workflows Design",
        "des" : "Sets up custom campaign workflows, delegates tasks, tracks work progress in real-time, and creates progress and performance reports"
      },
      {
        "name" : "Customer Targeting",
        "des" : "Helps marketing professionals define customer or prospect lists in commercial campaigns to improve redemption performance."
      },
      {
        "name" : "Multi-Channel Campaign Planning",
        "des" : "Helps marketing professionals personalize and deliver campaigns across all the online and offline channels."
      },
      {
        "name" : "Publish Scheduling",
        "des" : "Creates a custom posting schedule for the content across all the channels."
      }
    ],
    [
      {
        "name" : "Multi-Channel Communication",
        "des" : "Communicates offers to target customers across all the channels, including websites, mobile, social, direct mail, call centers and email."
      },
      {
        "name" : "Content Management",
        "des" : "A set of processes and technologies that supports the collection, managing, and publishing of information in any form or medium."
      },
      {
        "name" : "Influencer Marketing",
        "des" : "Targets on specific key individuals who have influence over potential customers."
      },
      {
        "name" : "SEO Management",
        "des" : "A process of getting traffic from the search results on search engines, including free, organic, natural, or editorial search results."
      },
      {
        "name" : "Social Media",
        "des" : "Helps marketing professionals manage the measurable objectvies, track the progress, and evaluate the performance on all the social media platforms."
      },
      {
        "name" : "Mobile",
        "des" : "Helps marketing professionals manage the mobile marketing campaign, including the content, the schedule, the progress, and the performance."
      },
      {
        "name" : "Email",
        "des" : "Helps marketing professionals track the email marketing campaign, and generate reports."
      }
    ],
    [
      {
        "name" : "Campaign Process Tracking/Monitoring",
        "des" : "Assists marketers to track each stage of campaigns that's under going, including how it's executed, perfomed, as well as it's current outcomes; Marketers will be able to adjust their campaign processes accordingly."
      },
      {
        "name" : "Budget Tracking",
        "des" : "Records expenses during campaign processes, and compare those with budget in real time."
      }
    ],
    [
      {
        "name" : "Benchmarking",
        "des" : "Helps set benchmarks for various metrics based on historical data or industry averages."
      },
      {
        "name" : "Data Exchange(Customer/Campaign Data)",
        "des" : "Integrates marketing technologies together, and makes it easier to transfer data among different platforms."
      },
      {
        "name" : "Conversion Tracking",
        "des" : "Helps marketers track each channel's conversion rate, which contributes to an easier attribution process."
      }
    ],
    [
      {
        "name" : "Website/Email Personalization",
        "des" : "Helps marketers to generate customized website or emails that displays specific content for particular target segments."
      },
      {
        "name" : "Lead Scoring",
        "des" : "Helps marketers to score data points based on their potential conversion rate of a marketing campaign, and identify the ones with highest scores for further engagement with them."
      },
      {
        "name" : "Campaign Testing",
        "des" : "Automatically test campaign results for marketers; the campaigns being tested can include owned websites, products and marketing collateral."
      },
      {
        "name" : "Event Triggering",
        "des" : ""
      },
      {
        "name" : "Lead Nurturing",
        "des" : ""
      },
      {
        "name" : "A/B Testing",
        "des" : ""
      },
    ]
  ];
  stage2 = [];
  constructor(public af:AF ){

  }

  ClickStage1(id){
    this.stage1[id].ischecked = true;
    for(var i = 0; i < this.sub[id].length; i ++){
      this.stage2.push(this.sub[id][i]);
    }
  }

  SubmitMarketerProfile(form : NgForm){
    //for stage1
    // let tempstage1 = [];
    // for(var i = 0; i < this.stage1.length; i ++){
    //   if(this.stage1[i].ischecked) tempstage1.push(this.stage1[i]);
    // }
    // let tempstage2 = [];
    // for(var i = 0; i < this.stage2.length; i ++){
    //   if(this.stage2[i].ischecked) tempstage2.push(this.stage2[i]);
    // }
    // let profile = {
    //   Stage1 : tempstage1,
    //   Stage2 : tempstage2,
    //   Stage3 : form.controls['budget'].value,
    //   Stage4 : form.controls['requirement'].value
    // };
    this.af.SubmitMarketerProfile(form);
  }
}
