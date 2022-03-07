import { Component, OnInit } from '@angular/core';
import { OcrComponent } from '../ocr/ocr.component';
import { ColorTComponent } from '../color-t/color-t.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-render-img',
  templateUrl: './render-img.component.html',
  styleUrls: ['./render-img.component.css']
})
export class RenderImgComponent implements OnInit {

  imgURL: any;
  message: string = "";
  visible:boolean = true;

  constructor(private ocr:OcrComponent, private imageT:ColorTComponent, private router: Router) {  }
  
  ngOnInit(): void {
  }

  visible2(){
    this.imageT.colors = [];
    this.imageT.colorShow = false;
    this.visible = true;
    this.ocr.rec = false;
    this.imgURL = null;
  }

  preview(file:any) {
    this.visible = false;
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
      if(this.router.url=="/imgT"){
        this.imageT.getCFI(this.imgURL);
      }
    }

    if(this.router.url=="/ocr"){
      this.ocr.ocr(file);
    }
    
  }


}
