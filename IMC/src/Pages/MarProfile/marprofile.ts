import { Component, NgModule } from '@angular/core';
import { AF } from '../Providers/firebase';

@Component({
  selector: 'marprofile',
  templateUrl: './marprofile.html',
  styleUrls: ['./marprofile.css']
})
export class MarProfile {
  constructor(public af:AF){
    //console.log(this.af.marketers);
  }
}
