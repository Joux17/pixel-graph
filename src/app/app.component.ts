import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService, Border, ColorObject } from './app.service';
import { DayComponent } from './components/day/day.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DayComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pixel-graph';

}
