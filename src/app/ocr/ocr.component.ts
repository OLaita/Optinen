import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { RenderImgComponent } from '../render-img/render-img.component';
// import { createWorker } from 'tesseract.js';


@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent implements OnInit {

  ocrResult = 'Recognizing...';
  title = 'tesseract.js-angular-app';
  rec = false;
  file: any = null;
  constructor(private ri:RenderImgComponent) {
    //this.doOCR();
   }

  ngOnInit(): void {
  }


  ocr(imageInput: any){
    this.ri.preview(imageInput);
    this.file = imageInput.files[0];
    console.log(this.file.name);

    Tesseract
    .recognize(this.file)
    .then((res: any) => {
        // console.log(res.data.text);
        this.ocrResult = res.data.text;
    })
    .catch(console.error);
  }

}
