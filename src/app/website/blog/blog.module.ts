import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../_shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from '../../website';

import { ArticleApiService, } from '../../_services';




@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
  ],
  declarations: [
    BlogComponent,
  ],
  providers: [
    ArticleApiService
  ]
})
export class BlogModule { }