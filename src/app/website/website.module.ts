import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from '../website';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule,
  ],
  declarations: [
    WebsiteComponent,
  ]
})
export class WebsiteModule { }