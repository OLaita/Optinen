import { Component, OnInit } from '@angular/core';
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
  prog: string = "";

  getCFI(imageURL:any){
    (async () => {
      this.colorPallete = await getPaletteFromURL(imageURL);
      console.log('Color Pallete:\n', this.colorPallete);
    })();


  }

  ngOnInit(): void {
    }

}
