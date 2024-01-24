import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';

  calendar: (string|null)[][] = [];

  appService = inject(AppService)

  ngOnInit() {
    this.calendar = this.appService.year
  }
}
