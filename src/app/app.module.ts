import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OcrComponent } from './ocr/ocr.component';
import { RenderImgComponent } from './render-img/render-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorTComponent } from './color-t/color-t.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { RegisterPageComponent } from './pages/register-page/register-page.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';


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
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [RenderImgComponent,ColorTComponent,OcrComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
