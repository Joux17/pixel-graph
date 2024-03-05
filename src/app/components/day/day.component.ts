import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Border, ColorObject } from '../../app.service';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {

  @Input() color: ColorObject = { color: "white", value: 0};

  @Input() colors: ColorObject[] = []

  @Input() borders: Border[] = []

  @Output() selectedColorEvent = new EventEmitter<ColorObject>();

  count: number = 0;

  ngOnInit(): void {
    this.count = this.color?.value ?? 0;
  }

  selectColor() {
    const max = this.colors.length - 1;

    this.count = this.count < max ? this.count + 1 : 0;
    this.color = this.colors[this.count];
    this.selectedColorEvent.emit(this.color);
  }

  computeBorderStyle(): string {
    let style = this.color?.color ? `background-color:${this.color.color};` : "";
    this.borders.forEach(borderSide => {
      style += `border-${borderSide}: 1px solid black;`;
    });

    return style;
  }
}
