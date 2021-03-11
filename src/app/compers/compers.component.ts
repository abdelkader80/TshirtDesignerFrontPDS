import { Component, OnInit } from '@angular/core';
import {fabric} from 'fabric';

@Component({
  selector: 'app-compers',
  templateUrl: './compers.component.html',
  styleUrls: ['./compers.component.css']
})
export class CompersComponent implements OnInit {

  constructor() {

  }




  selected = "capuche.png";

  ngOnInit(): void {
  let selected = "capuche.png";
    let url="assets/images/"+selected;
    /*
    const canvas=new fabric.Canvas('canvas',{
      width:500,
      height:500,
      backgroundColor:'red'
    }
    );
    fabric.Image.fromURL('assets/images/background_tshirt.png',(img)=>{
      //canvas.add(img);
      canvas.backgroundImage=img
      canvas.renderAll()
    });*/
    const initCanvas=(id)=>{
      return new fabric.Canvas(id,{
        width:450,
        height:500,
        backgroundColor:'red'

      });
    }

    const setBackground=(url, canvas)=>{
      fabric.Image.fromURL(url,(img)=>{
        canvas.add(img);
        //canvas.backgroundImage=img
        canvas.renderAll()
      })
    }

    const canvas=initCanvas('canvas');
    setBackground(url,canvas);

    const addCercle=(canvas)=>{
      const rect=new fabric.Rect({
        width:100,
        height:100,
        fill:'green',
        left:10,
        top:10
      });
      canvas.add(rect)
      canvas.renderAll()
    }


    const addRectangle=(canvas)=>{
      const rect=new fabric.circle({

      })

    }

  }


}
