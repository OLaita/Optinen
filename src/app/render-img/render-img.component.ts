import { Component, OnInit } from '@angular/core';
import { OcrComponent } from '../ocr/ocr.component';
import { ColorTComponent } from '../color-t/color-t.component';

@Component({
  selector: 'app-render-img',
  templateUrl: './render-img.component.html',
  styleUrls: ['./render-img.component.css']
})
export class RenderImgComponent implements OnInit {

  imgURL: any;
  message: string = "";

  constructor(private ocr:OcrComponent, private imageT:ColorTComponent) {  }
  
  ngOnInit(): void {
  }

  preview(file:any,type:string) {
    if (file.files.length === 0)
      return;
 
    var mimeType = file.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    
    
 
    var reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onload = (e:any) => { 
      this.imgURL = e.target.result;
      if(type=="img"){
        this.imageT.getCFI(this.imgURL);
      }
    }

    if(type=="ocr"){
      this.ocr.ocr(file);
    }
    
  }


}
