import { MatDialog } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { ColorObject } from '../../app.interface';

@Component({
  selector: 'app-dialog-button',
  standalone: true,
  imports: [],
  templateUrl: './dialog-button.component.html',
  styleUrl: './dialog-button.component.css'
})
export class DialogButtonComponent {

  dialog = inject(MatDialog);

  name: string = '';

  colors: any[] = [
    { color: 'white', label: 'no alcohol' },
    { color: 'yellow', label: '1 glass' },
    { color: 'orange', label: '3 glasses' },
    { color: 'red', label: '5 glasses' },
    { color: 'black', label: 'blackout' },
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.colors,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}
