import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarProfile } from '../Pages/MarProfile/marprofile';
import { VenProfile } from '../Pages/VenProfile/venprofile';
import { SearchPage } from '../Pages/Search/search';
import { MatchPage } from '../Pages/MatchPage/matchpage';
import { Home } from '../Pages/Home/home';
import { ConsiderationSet } from '../Pages/ConsiderationSet/set';
import { Product } from '../Pages/Product/product';

const routes: Routes = [
  {path: 'home',component: Home},
  {path: 'marprofile', component: MarProfile},
  {path: 'search', component: SearchPage},
  {path : 'considerationset', component : ConsiderationSet},
  {path : 'venprofile', component : VenProfile},
  {path : 'matchpage', component : MatchPage},
  {path : 'product', component : Product},
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
