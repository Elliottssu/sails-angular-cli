import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConferenceComponent } from '../../website';


const conferenceRoutes: Routes = [
  {
    path: '',
    component: ConferenceComponent,
    data: { title: '首页-HornetsTeam开发者' }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(conferenceRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class ConferenceRoutingModule { }