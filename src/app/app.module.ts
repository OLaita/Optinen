import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OcrComponent } from './ocr/ocr.component';
import * as Tesseract from 'tesseract.js';
import { RenderImgComponent } from './render-img/render-img.component'


@NgModule({
  declarations: [
    AppComponent,
    OcrComponent,
    RenderImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RenderImgComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
