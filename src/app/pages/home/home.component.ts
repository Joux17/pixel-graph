import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService, Border, ColorObject } from '../../app.service';
import { DayComponent } from '../../components/day/day.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, DayComponent, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  monthsNames: string[] = []

  calendar: (string | null)[][] = [[]];

  daysNumber = Array(31);
  monthsLetter: string[] = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  quantites: ColorObject[] = [
    { color: 'white', label: 'no alcohol', value: 0 },
    { color: 'yellow', label: '1 glass', value: 1 },
    { color: 'orange', label: '3 glasses', value: 2 },
    { color: 'red', label: '5 glasses', value: 3 },
    { color: 'black', label: 'blackout', value: 4 },
  ];

  appService = inject(AppService)

  selectableColors: ColorObject[] = []

  ngOnInit() {
    this.calendar = this.appService.getCalendar();
    this.selectableColors = this.appService.colors;
  }

  mapValueToObject(value: number): ColorObject {
    return this.selectableColors.find(color => color.value === value)!!;
  }

  mapColorToObject(color: string): ColorObject {
    return this.selectableColors.find(c => c.color === color)!!;
  }

  save(indexMois: number, indexDay: number, color: ColorObject) {
    console.log(`${indexMois}, ${indexDay} :  ${color}`);
    this.calendar[indexMois][indexDay] = color?.color;
    this.appService.persistDay(indexMois, indexDay, color.value);
    this.appService.persist(this.calendar);
  }

  getBorders(indexMois: number, indexDay: number): Border[] {
    let borders: Border[] = [];

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

  imagePath(value: number): string {
    return `assets/l${value}.jpg`
  }

}
