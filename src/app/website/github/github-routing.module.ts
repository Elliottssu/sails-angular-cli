import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubComponent } from '../../website';


const githubRoutes: Routes = [
  {
    path: '',
    component: GithubComponent,
    data: { title: '首页-HornetsTeam开发者' }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(githubRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class GithubRoutingModule { }