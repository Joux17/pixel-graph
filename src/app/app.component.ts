import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { DayComponent } from './components/day/day.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';

  monthsNames: string[] = []

  calendar: (string|null)[][] = [];

  daysNumber = Array(31);
  monthsLetter: string[] = ['J','F','M','A','M','J','J','A','S','O','N','D'];

  appService = inject(AppService)

  colors: string[] = []

  ngOnInit() {
    this.calendar = this.appService.year;
    this.colors = this.appService.colors;
  }

  save(indexMois: number,  indexDay: number, color: string) {
    console.log(`${indexMois}, ${indexDay} :  ${color}`);
    this.calendar[indexMois][indexDay] = color;
  }
}
