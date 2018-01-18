import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorComponent } from '../../website';


const authorRoutes: Routes = [
  {
    path: '',
    component: AuthorComponent,
    data: { title: '文章-HornetsTeam开发者' }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(authorRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AuthorRoutingModule { }