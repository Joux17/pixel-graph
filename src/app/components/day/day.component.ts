import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {

  @Input() color: {color: string, value: number} = { color: "white", value: 0};

  @Input() colors: {color: string, value: number}[] = []

  @Input() border: ("left"|"right"|"top"|"bottom")[] = []

  @Output() selectedColorEvent = new EventEmitter<string>();

  count: number = 0;

  ngOnInit(): void {
    this.count = this.color?.value;
  }

  selectColor() {
    const max = this.colors.length - 1;

    this.count = this.count < max ? this.count + 1 : 0;
    this.color = this.colors[this.count];
    this.selectedColorEvent.emit(this.color?.color);
  }

  computeBorderStyle(): string {
    // let style = `'background-color':${this.color.color};`;
    let style = "";
    this.border.forEach(element => {
      style += `border-${element}: 1px solid black;`;
    });

    return style;
  }
}
