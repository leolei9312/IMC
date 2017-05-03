import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LandingPage } from '../Pages/LandingPage/landingpage';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { AppRoutingModule } from './router';
@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    MarProfile
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
