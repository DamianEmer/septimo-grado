import { Component, OnInit } from '@angular/core';
//import { ImagesService } from '../../services/images.service';
import { Image, PlainGalleryConfig, PlainGalleryStrategy, LineLayout } from
'angular-modal-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {

  images: Image[] = [
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
        img: '../../../assets/1 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      2,
      {
        img: '../../../assets/2 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      3,
      {
        img: '../../../assets/3 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      4,
      {
        img: '../../../assets/4 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      5,
      {
        img: '../../../assets/5 seleccion.jpg',
        description: 'sin descripcion'
      }
    )
  ];

  //images: Image[] = [];

  constructor() { }

  // Custom previewC
  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({width: '100%', height: '100%'},
        {length: 1, wrap: false}, 'flex-start')
  }

  ngOnInit(){
    //this.images = this.imageService.getImages();
  }
}
