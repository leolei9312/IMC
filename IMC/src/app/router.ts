import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { LandingPage } from '../Pages/LandingPage/landingpage';

const routes: Routes = [
  {path: 'landingpage',component: LandingPage},
  {path: 'marprofile', component: MarProfile},
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
