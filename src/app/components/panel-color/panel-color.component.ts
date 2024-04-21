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

  @Input() selectableColors: ColorObject[] = []

  @Output() selectedColorEvent = new EventEmitter<ColorObject>();

  ngOnInit(): void {

  }

  selectColor(color: ColorObject) {
    this.selectedColorEvent.emit(color);
  }


}
