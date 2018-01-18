



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../_shared/shared.module';
import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from '../../website';

import { ArticleApiService, } from '../../_services';




@NgModule({
  imports: [
    CommonModule,
    GithubRoutingModule,
    SharedModule,
  ],
  declarations: [
    GithubComponent,
  ],
  providers: [
    ArticleApiService
  ]
})
export class GithubModule { }