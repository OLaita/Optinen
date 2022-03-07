import { Component, OnInit } from '@angular/core';
// import * as Tesseract from 'tesseract.js';
import Tesseract from 'tesseract.js';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent implements OnInit {

  ocrResult = 'Reconociendo...';
  title = 'Optinen';
  rec = false;
  file: any = null;
  prog: string = "";
  copy: boolean = false;
  bar: boolean = true;


  constructor(private clip: ClipboardService) {
    
   }

  ngOnInit(): void {
  }

  copyText(){
    this.clip.copyFromContent(this.ocrResult)
  }

  ocr(imageInput: any){
    this.bar = true;
    this.rec = true;
    this.copy = false;
    this.file = imageInput.files[0];

    this.ocrResult = "";


    Tesseract.recognize(
      this.file,
      'eng+spa',
      { logger: m =>  this.prog = m.progress}
    ).then(({ data: { text } }) => {
      console.log(text);
      this.bar = false;
      this.ocrResult = text;
      this.copy = true;
    })

    /*(async () => {
      await worker.load();
      await worker.loadLanguage('eng+spa');
      await worker.initialize('eng+spa');
      const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
      console.log(text);
      await worker.terminate();
    })();*/

    /*.recognize(this.file)
    .progress(p => console.log('progress', p))
    .then((res: any) => {
        this.ocrResult = res.data.text;
    })
    .catch(console.error);*/
  }

}
