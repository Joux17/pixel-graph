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

  appService = inject(AppService)

  ngOnInit() {
    this.calendar = this.appService.year
    this.monthsNames = ["jan","fev","mar","avr","mai","jui","jui","aou","sep","oct","nov","dec"]
  }
}
