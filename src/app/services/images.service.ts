import { Injectable } from '@angular/core';
import { Image } from 'angular-modal-gallery';

@Injectable()
export class ImagesService {

  photos: Image[] = [
    new Image(
      0,
      {
        img: '../../assets/grupo.jpg',
        title: 'Septimo grado',
        description: 'El grupo de tu agrado'
      }
    ),
    new Image(
      1,
      {
        img: '../../assets/1 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      2,
      {
        img: '../../assets/2 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      3,
      {
        img: '../../assets/3 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      4,
      {
        img: '../../assets/4 seleccion.jpg',
        description: 'sin descripcion'
      }
    ),
    new Image(
      5,
      {
        img: '../../assets/5 seleccion.jpg',
        description: 'sin descripcion'
      }
    )
  ];

  constructor() { }
  
  getImages () {
    return this.photos;
  }

}
