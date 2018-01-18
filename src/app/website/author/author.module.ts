import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../../_shared/shared.module';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from '../../website';

import { ArticleApiService, SharedService } from '../../_services';


import { MarkdownModule } from 'ngx-md';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AuthorRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    AuthorComponent,
  ],
  providers: [
    ArticleApiService,
    SharedService
  ]
})
export class AuthorModule { }