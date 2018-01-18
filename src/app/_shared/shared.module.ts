import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pipes
import { ImgHtmlPipe } from '../_pipes';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [   
        ImgHtmlPipe, 
    ],
    exports: [
        CommonModule,
        ImgHtmlPipe,
    ],
})

export class SharedModule {

}