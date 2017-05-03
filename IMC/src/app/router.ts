import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { Home } from '../Pages/Home/home';

const routes: Routes = [
  {path: 'home',component: Home},
  {path: 'marprofile', component: MarProfile},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
