import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {

  @Input() color: string|null = null;

  @Input() colors: string[] = []

  @Output() selectedColorEvent = new EventEmitter<string>();

  count: number = 0;

  selectColor() {
    const max = this.colors.length - 1;

    this.count = this.count < max ? this.count + 1 : 0;
    this.color = this.colors[this.count];
    this.selectedColorEvent.emit(this.color);
  }
}
