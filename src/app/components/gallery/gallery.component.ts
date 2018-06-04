import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gallery:any [] = [
    {
      title: "photo1",
      url: "../../assets/image-group.jpg",
      category: "group"
    },
    {
      title: "photo2",
      url: "../../assets/image-group2.jpg",
      category: "event"
    }
  ];

}
