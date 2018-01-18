import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from '../../website';


const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    data: { title: '文章-HornetsTeam开发者' }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class ArticleRoutingModule { }