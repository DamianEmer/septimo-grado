import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular-modal-gallery
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';

//Enrutamiento para pruebas
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';

//Enrutamiento de prueba
const appRoutes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'paquetes', component: PackagesComponent},
  {path: 'fotos', component: PhotosComponent},
  {path: '', redirectTo:'/inicio', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PackagesComponent,
    PhotosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ModalGalleryModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {  enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
