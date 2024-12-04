import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorComponent } from './components/visor/visor.component';
import { InfoComponent } from './components/info/info.component';


import imagesData from '../assets/images.json';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VisorComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Mi Galeria de Gatitos';
  images = imagesData;
  groupedImages: any[][] = [];
  selectedImage = this.images[0]; 
  mouseCoordinates!: { x: number; y: number };

  ngOnInit(): void {
    this.groupImages();
  }
  ngAfterViewInit(): void {
    // Inicializar el carrusel una vez que las vistas hijas están listas
    const carouselElement = document.querySelector('#catCarousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: false,
        wrap: true
      });
    }
  }
  groupImages(): void {
    const groupSize = 4; // cantidad de fotos que se muestran en el carrusel
    for (let i = 0; i < this.images.length; i += groupSize) {
      this.groupedImages.push(this.images.slice(i, i + groupSize));
    }
  }

  selectImage(image: any):void {
    this.selectedImage = image;
  }

  //metodo para actualizar coordenadas del raton
  onMouseCoordinatesUpdate(coords: { x: number; y: number }) {
    console.log('Coordenadas recibidas en AppComponent:', coords);
    this.mouseCoordinates = coords;
  }

}
