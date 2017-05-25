import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Home } from '../Pages/Home/home';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { VenProfile } from '../Pages/VenProfile/venprofile';
import { SearchPage } from '../Pages/Search/search';
import { ConsiderationSet } from '../Pages/ConsiderationSet/set';
import { MatchPage } from '../Pages/MatchPage/matchpage';
import { Product } from '../Pages/Product/product';
import { AppRoutingModule } from './router';
import { AF } from '../Pages/Providers/firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FileUploadModule } from 'ng2-file-upload';
import {RatingModule} from "ngx-rating";


export const firebaseConfig = {
  apiKey: "AIzaSyD1HTPubvjv39Z4QyyvqhyyY-9Jjik5RfA",
  authDomain: "imcmartech.firebaseapp.com",
  databaseURL: "https://imcmartech.firebaseio.com",
  projectId: "imcmartech",
  storageBucket: "imcmartech.appspot.com",
  messagingSenderId: "76653086852"
};
const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    Home,
    MarProfile,
    SearchPage,
    ConsiderationSet,
    VenProfile,
    MatchPage,
    Product
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FileUploadModule,
    RatingModule
  ],
  providers: [
    AF,
    Home,
    MarProfile,
    SearchPage,
    ConsiderationSet,
    VenProfile,
    MatchPage
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
