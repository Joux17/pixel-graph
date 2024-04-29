import { NgStyle } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ColorObject, Coordinates } from '../../app.types';

@Component({
  selector: 'app-panel-color',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './panel-color.component.html',
  styleUrl: './panel-color.component.css'
})
export class PanelColorComponent implements OnInit {

  @Input() selectableColors: ColorObject[] = [];

  @Input() coordinates: Coordinates = {x: 0, y: 0}

  @Output() selectedColorEvent = new EventEmitter<ColorObject>();

  elementRef = inject(ElementRef)

  ngOnInit(): void {
  }

  selectColor(color: ColorObject) {
    this.selectedColorEvent.emit(color);
  }

  computeStyle() {
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;
    const dialogWidth: number = this.valueOf('--dialog-size');
    const dialogHeight: number = 50;

    let left: number = this.coordinates.x;
    let top: number = this.coordinates.y;

    // Check if dialog exceeds right edge of the screen
    if (left + dialogWidth > windowWidth) {
      left = windowWidth - dialogWidth;
    }

    // Check if dialog exceeds bottom edge of the screen
    if (top + dialogHeight > windowHeight) {
      top = windowHeight - dialogHeight;
    }

    return `top:${top}px; left:${left}px;`;
  }

  valueOf(cssVariable: string): number {
    return parseInt(getComputedStyle(this.elementRef.nativeElement).getPropertyValue(cssVariable));
  }

}
