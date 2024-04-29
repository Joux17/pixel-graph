import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxBorder, ColorObject, Coordinates } from '../../app.types';
import { PanelColorComponent } from '../panel-color/panel-color.component';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [NgStyle, PanelColorComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {

  @Input() color: ColorObject = { color: "white", value: 0, label: "no alcohol" };

  @Input() selectableColors: ColorObject[] = []

  @Input() borders: BoxBorder[] = []

  @Output() selectedColorEvent = new EventEmitter<ColorObject>();

  showPanel: boolean = false;

  x: number = 0;
  y: number = 0;

  ngOnInit(): void {}

  computeBorderStyle(): string {
    let style = this.color?.color ? `background-color:${this.color.color};` : "";
    this.borders.forEach(borderSide => {
      style += `border-${borderSide}: 1px solid black;`;
    });

    return style;
  }

  saveColor(color: ColorObject) {
    this.selectedColorEvent.emit(color);
  }

  openModal(event: MouseEvent) {
    this.showPanel = !this.showPanel;
    this.x = event.pageX
    this.y = event.pageY
  }

  getCoordinates(): Coordinates {
    return {
      x: this.x,
      y: this.y,
    }
  }
}
