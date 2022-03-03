import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-img',
  templateUrl: './render-img.component.html',
  styleUrls: ['./render-img.component.css']
})
export class RenderImgComponent implements OnInit {

  imgURL: any;
  message: string = "";

  constructor() {  }

  preview(file:any) {
    if (file.files.length === 0)
      return;
 
    var mimeType = file.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    reader.onload = (e:any) => { 
      this.imgURL = e.target.result; 
      (<HTMLInputElement>document.getElementById("try")).src=this.imgURL;
    }
    reader.readAsDataURL(file.files[0]);
  }
  
  ngOnInit(): void {
  }

}
