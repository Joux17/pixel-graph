import { NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  @Input() color: string = '';

}
