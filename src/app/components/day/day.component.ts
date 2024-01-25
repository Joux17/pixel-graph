import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  selectColor() {
    const max = this.colors.length;
    this.color = this.colors[Math.floor(Math.random() * max)];

  }
}
