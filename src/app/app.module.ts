import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OcrComponent } from './ocr/ocr.component';
import * as Tesseract from 'tesseract.js'


@NgModule({
  declarations: [
    AppComponent,
    OcrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
