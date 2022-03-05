import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcrComponent } from './ocr/ocr.component';
import { ColorTComponent } from './color-t/color-t.component';

const routes: Routes = [
  {path: 'ocr', component: OcrComponent},
  {path: 'imgT', component: ColorTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
