import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
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
  title = 'my-project';

  monthsNames: string[] = []

  calendar: (string | null)[][] = [[]];

  daysNumber = Array(31);
  monthsLetter: string[] = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  quantites: { color: string, label: string }[] = [
    { color: 'white', label: 'no alcohol' },
    { color: 'yellow', label: '1 glass' },
    { color: 'orange', label: '3 glasses' },
    { color: 'red', label: '5 glasses' },
    { color: 'black', label: 'blackout' },
  ];

  appService = inject(AppService)

  colors: { color: string, value: number }[] = []

  ngOnInit() {
    this.calendar = this.appService.getCalendar();
    this.colors = this.appService.colors;
  }

  mapValueToObject(value: number): { color: string, value: number } {
    return this.colors.find(color => color.value === value)!!;
  }

  mapColorToObject(color: string): { color: string, value: number } {
    return this.colors.find(c => c.color === color)!!;
  }

  save(indexMois: number, indexDay: number, color: string) {
    console.log(`${indexMois}, ${indexDay} :  ${color}`);
    this.calendar[indexMois][indexDay] = color;

    this.appService.persist(this.calendar);
  }

  getBorder(indexMois: number, indexDay: number): ("left" | "right" | "top" | "bottom")[] {
    let borders: ("left" | "right" | "top" | "bottom")[] = [];

    const isNextMonthSmaller = indexDay > this.calendar[indexMois + 1]?.length - 1;
    const isPreviousMonthSmaller = indexDay > this.calendar[indexMois - 1]?.length - 1;
    const isFirstMonth = indexMois === 0;
    const isFirstDay = indexDay === 0;
    const isLastMonth = indexMois === 11;
    const isLastDay = indexDay === this.calendar[indexMois].length - 1;

    if (isFirstMonth || isPreviousMonthSmaller) {
      borders.push('left');
    }

    if(isFirstDay) {
      borders.push('top');
    }

    if(isLastMonth || isNextMonthSmaller) {
      borders.push('right');
    }

    // si le dernier jour du mois
    if(isLastDay) {
      borders.push('bottom');
    }

    return borders;
  }
}
