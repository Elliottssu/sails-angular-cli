import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../../_shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from '../../website';

import { ArticleApiService, SharedService } from '../../_services';


import { MarkdownModule } from 'ngx-md';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ArticleRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    ArticleComponent,
  ],
  providers: [
    ArticleApiService,
    SharedService
  ]
})
export class ArticleModule { }