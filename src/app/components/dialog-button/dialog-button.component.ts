import { MatDialog } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: "Joux"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}
