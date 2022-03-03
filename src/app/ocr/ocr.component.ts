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

  constructor() {
    //this.doOCR();
   }

  ngOnInit(): void {
  }

  test2(){
    console.log("pepsi");
    Tesseract
    .recognize('https://tesseract.projectnaptha.com/img/eng_bw.png')
    .then((res: any) => {
        console.log(res.data.text);
        this.ocrResult = res.data.text;
    })
    .catch(console.error);
  }

  /*async doOCR() {
    const worker = createWorker({
      logger: m => console.log(m),
    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://jeroen.github.io/images/testocr.png');
    this.ocrResult = text;
    console.log(text);
    await worker.terminate();
  }*/

  /*test(){

    console.log("patata");

    Tesseract.recognize(
      'https://tesseract.projectnaptha.com/img/eng_bw.png',
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
    })

  }*/

}
