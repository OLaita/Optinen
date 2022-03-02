import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  test(){

    console.log("patata");

    Tesseract.recognize(
      'https://tesseract.projectnaptha.com/img/eng_bw.png',
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
    })

  }

}
