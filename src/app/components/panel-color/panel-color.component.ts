import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorObject } from '../../app.types';

@Component({
  selector: 'app-panel-color',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './panel-color.component.html',
  styleUrl: './panel-color.component.css'
})
export class PanelColorComponent implements OnInit {

  @Input() selectableColors: ColorObject[] = [];

  @Input() coordinates: {x: number, y: number} = {x: 0, y: 0}

  @Output() selectedColorEvent = new EventEmitter<ColorObject>();

  ngOnInit(): void {

  }

  selectColor(color: ColorObject) {
    this.selectedColorEvent.emit(color);
  }

  computeStyle() {
    return `top:${this.coordinates.y}px;
    left:${this.coordinates.x}px`
  }

}
