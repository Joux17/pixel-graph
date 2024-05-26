import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from '../../app.service';
import { DayComponent } from '../../components/day/day.component';
import { NgStyle } from '@angular/common';
import { BoxBorder, ColorObject, DailyValue, Metrics } from '../../app.types';
import { DateUtils } from '../../utils/date.utils';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../utils/firebase/firebase.utils';

const MAX_DAYS_IN_MONTH = 31;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, DayComponent, NgStyle, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dbService = inject(FirebaseService);

  metrics: Metrics[] = [];

  calendar: (string | null)[][] = [];

  actualYear: number = new Date().getFullYear();
  selectableYears: number[] = [this.actualYear, 2023, 2022]
  selectedYear: number = this.actualYear;

  maxDaysInMonth = Array(MAX_DAYS_IN_MONTH);

  monthsLetter: string[] = DateUtils.getMonthLetters();

  appService = inject(AppService)

  selectableColors: ColorObject[] = []

  async ngOnInit() {

    this.calendar = DateUtils.getCalendar(this.selectedYear);

    this.selectableColors = this.appService.quantites;

    this.dbService.getMetrics().subscribe((response: Metrics[]) => {
      console.log("from service : ", response);
      this.metrics = response
    });

  }

  extractConsoForDay(indexMonth: number, indexDay: number): ColorObject {
    const conso: DailyValue = this.appService.getConsoYear(this.selectedYear);

    const data: number = conso[`${indexMonth};${indexDay}`] ?? 0

    return this.mapValueToObject(data);
  }

  mapValueToObject(value: number): ColorObject {
    return this.selectableColors.find(color => color.value === value)!!;
  }

  mapColorToObject(color: string): ColorObject {
    return this.selectableColors.find(c => c.color === color)!!;
  }

  onYearChange() {
    this.calendar = DateUtils.getCalendar(this.selectedYear);
  }

  save(indexMois: number, indexDay: number, color: ColorObject) {
    this.calendar[indexMois][indexDay] = color?.color;
    this.appService.persistDay(this.selectedYear, indexMois, indexDay, color.value);
  }

  getBorders(indexMois: number, indexDay: number): BoxBorder[] {
    let borders: BoxBorder[] = [];

    const isNextMonthSmaller = indexDay > this.calendar[indexMois + 1]?.length - 1;
    const isPreviousMonthSmaller = indexDay > this.calendar[indexMois - 1]?.length - 1;
    const isFirstMonth = indexMois === 0;
    const isFirstDay = indexDay === 0;
    const isLastMonth = indexMois === 11;
    const isLastDay = indexDay === this.calendar[indexMois].length - 1;

    if (isFirstMonth || isPreviousMonthSmaller) {
      borders.push('left');
    }

    if (isFirstDay) {
      borders.push('top');
    }

    if (isLastMonth || isNextMonthSmaller) {
      borders.push('right');
    }

    // si le dernier jour du mois
    if (isLastDay) {
      borders.push('bottom');
    }

    return borders;
  }

  imagePath(value: number): string {
    return `assets/l${value}.jpg`
  }

}
