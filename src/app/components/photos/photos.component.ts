import { Component, OnInit } from '@angular/core';
import { Image, PlainGalleryConfig, PlainGalleryStrategy, LineLayout } from 'angular-modal-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  // Custom previewC
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    stratry: PlainGalleryStrategy.ROW,
    layout: new LineLayout({width: '100%', height: '355px'},
        {length: 1, wrap: false}, 'flex-start')
  }

  // Dummi
  showImages: Image[] = [
    new Image(
      0,
      {
        img: '../../../assets/grupo.jpg',
        title: 'Septimo grado',
        description: 'El grupo de tu agrado'
      }
    ),
    new Image(
      1,
      {
        img: '../../../assets/1 seleccion.jpg'
        description: 'sin descripcion'
      }
    ),
    new Image(
      2,
      {
        img: '../../../assets/2 seleccion.jpg'
        description: 'sin descripcion'
      }
    ),
    new Image(
      3,
      {
        img: '../../../assets/3 seleccion.jpg'
        description: 'sin descripcion'
      }
    ),
    new Image(
      4,
      {
        img: '../../../assets/4 seleccion.jpg'
        description: 'sin descripcion'
      }
    ),
    new Image(
      5,
      {
        img: '../../../assets/5 seleccion.jpg'
        description: 'sin descripcion'
      }
    )
  ];

  ngOnInit(){

  }
}
