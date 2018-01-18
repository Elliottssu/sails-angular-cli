import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteComponent } from '../website';


const websiteRoutes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule',
        data: { preload: true }
      },
      {
        path: 'conference',
        loadChildren: './conference/conference.module#ConferenceModule',
        data: { preload: true }
      },
      {
        path: 'github',
        loadChildren: './github/github.module#GithubModule',
        data: { preload: true }
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        data: { preload: true }
      },
      {
        path: 'article/:id',
        loadChildren: './article/article.module#ArticleModule',
        data: { preload: true }
      },
      {
        path: 'author/:id',
        loadChildren: './author/author.module#AuthorModule',
        data: { preload: true }
      },
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(websiteRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class WebsiteRoutingModule { }