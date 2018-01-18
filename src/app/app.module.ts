import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Plugs
import { CookieModule } from 'ngx-cookie';

//Service
import { UserApiService, SharedService, UtilService, InterceptService,} from './_services';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './_shared';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, //http拦截器
      useClass: InterceptService,
      multi: true,
    },
    UserApiService,
    SharedService,
    UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
