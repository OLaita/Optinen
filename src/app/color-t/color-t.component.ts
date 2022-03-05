import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { format } from 'path';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
const { getPaletteFromURL } = require('color-thief-node');

@Component({
  selector: 'app-color-t',
  templateUrl: './color-t.component.html',
  styleUrls: ['./color-t.component.css']
})
export class ColorTComponent implements OnInit {

  constructor() { }
  colorPallete:any;
  title = 'Optinen';
  file: any = null;
  colors:any = [];

  getCFI(imageURL:any){
    (async () => {
      this.colorPallete = await getPaletteFromURL(imageURL);
      console.log('Color Pallete:\n', this.colorPallete);
      this.ColorToHex(this.colorPallete);
    })();
  }

  ColorToHex(color:any) {

    for(var i=0; i<5; i++){
      console.log(i);
      this.addColors("#" + ((1 << 24) + (color[i][0] << 16) + (color[i][1] << 8) + color[i][2]).toString(16).slice(1));
    };
  }

  addColors(color:any){
    this.colors.push(color);
    console.log(this.colors);
  }
  
  ConvertRGBtoHex(red:any, green:any, blue:any) {
    this.colors.push("#" + this.ColorToHex(red) + this.ColorToHex(green) + this.ColorToHex(blue));
  }

  ngOnInit(): void {
    }

}
