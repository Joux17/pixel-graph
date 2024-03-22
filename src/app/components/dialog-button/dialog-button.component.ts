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

	colors: ColorObject[] = [
		{ color: 'white', label: 'no alcohol', value: 0 },
		{ color: 'yellow', label: '1 glass', value: 1 },
		{ color: 'orange', label: '3 glasses', value: 2 },
		{ color: 'red', label: '5 glasses', value: 3 },
		{ color: 'black', label: 'blackout', value: 4 },
	];

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogComponent, {
			data: this.colors,
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed with result : ', result);
			this.name = result;
		});
	}
}
