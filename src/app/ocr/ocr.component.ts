import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';
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

  constructor(/*public file: File*/) {
    //this.doOCR();
   }

  ngOnInit(): void {
  }


  processFile(imageInput: any){
    
    const file: File = imageInput.files[0];
    console.log("pepsi");

    Tesseract
    .recognize(file)
    .then((res: any) => {
        // console.log(res.data.text);
        this.ocrResult = res.data.text;
    })
    .catch(console.error);
  }

}
