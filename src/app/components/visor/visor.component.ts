import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-visor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.css'
})
export class VisorComponent {
  @Input() image!: Image;
  @Output() mousePosition = new EventEmitter<{ x: number; y: number }>();

  onMouseMove(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log('Emitiendo coordenadas:', { x, y });
    this.mousePosition.emit({ x, y });
  }
}
