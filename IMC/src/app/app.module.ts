import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Home } from '../Pages/Home/home';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { AppRoutingModule } from './router';
import { AF } from '../Pages/Providers/firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
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
    MarProfile
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    AF,
    Home,
    MarProfile
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
