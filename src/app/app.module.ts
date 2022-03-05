import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OcrComponent } from './ocr/ocr.component';
// import * as Tesseract from 'tesseract.js';
import { RenderImgComponent } from './render-img/render-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorTComponent } from './color-t/color-t.component';



@NgModule({
  declarations: [
    AppComponent,
    OcrComponent,
    RenderImgComponent,
    ColorTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RenderImgComponent,ColorTComponent,OcrComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
