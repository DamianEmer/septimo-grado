import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PhotosComponent } from './components/photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PackagesComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
