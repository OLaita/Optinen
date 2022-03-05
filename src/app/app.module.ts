import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OcrComponent } from './ocr/ocr.component';
// import * as Tesseract from 'tesseract.js';
import { RenderImgComponent } from './render-img/render-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorTComponent } from './color-t/color-t.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


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
    BrowserAnimationsModule,
    ClipboardModule,
    FontAwesomeModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [RenderImgComponent,ColorTComponent,OcrComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
