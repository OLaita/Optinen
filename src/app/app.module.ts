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
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './nav/nav.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    OcrComponent,
    RenderImgComponent,
    ColorTComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [RenderImgComponent,ColorTComponent,OcrComponent,NavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
