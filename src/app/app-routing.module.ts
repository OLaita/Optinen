import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrComponent } from './ocr/ocr.component';

const routes: Routes = [
  {path: 'ocr', component: OcrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
