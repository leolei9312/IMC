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
      "img" : './assets/img/acton.jpg',
      'name' : 'Act On',
      'description' : 'Act-On gives you the tools to quickly and easily set up strategic campaigns that deploy automatically based on your pre-programmed rules. From simple messages to highly sophisticated campaigns, Act-On’s automated programs allow you to use conditional “if-then” logic to trigger the next step in a campaign. You can set rules to automatically trigger emails, sync lists, and update data fields.',
      'link' : 'https://www.act-on.com/home-e/'
    },
    {
      "img" : './assets/img/contactpigeon.jpg',
      'name' : 'Contact Pigeon',
      'description' : 'ContactPigeon is a marketing automation platform that combines contact management, e-commerce analytics, campaign generator, automation smart-logic and reporting dashboard.',
      'link' : 'https://www.contactpigeon.com'
    },
    {
      "img" : './assets/img/salesforce.png',
      'name' : 'Pardot',
      'description' : 'Pardot is an on-demand software solution that provides a simple marketing automation platform to grow pipeline and generate better leads by allowing marketing and sales departments to create, deploy, automate, and manage marketing campaigns online.',
      'link' : 'product'
    },
    {
      "img" : './assets/img/ibm.jpg',
      'name' : 'IBM Watson Campaign Automation',
      'description' : 'IBM Watson Campaign Automation is a cloud-based digital marketing platform for email marketing, lead management and mobile and social engagement solutions.',
      'link' : 'http://www.ibm.com'
    },
  ];
  constructor(public af:AF ){

  }



}
