import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from '../../website';


const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: { title: '首页-HornetsTeam开发者' }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class BlogRoutingModule { }