





import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../_shared/shared.module';
import { ConferenceRoutingModule } from './conference-routing.module';
import { ConferenceComponent } from '../../website';

import { ArticleApiService, } from '../../_services';




@NgModule({
  imports: [
    CommonModule,
    ConferenceRoutingModule,
    SharedModule,
  ],
  declarations: [
    ConferenceComponent,
  ],
  providers: [
    ArticleApiService
  ]
})
export class ConferenceModule { }