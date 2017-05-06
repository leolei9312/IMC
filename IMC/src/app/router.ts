import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { SearchPage } from '../Pages/Search/search';
import { Home } from '../Pages/Home/home';
import { ConsiderationSet } from '../Pages/ConsiderationSet/set';
const routes: Routes = [
  {path: 'home',component: Home},
  {path: 'marprofile', component: MarProfile},
  {path: 'search', component: SearchPage},
  {path : 'considerationset', component : ConsiderationSet},
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
