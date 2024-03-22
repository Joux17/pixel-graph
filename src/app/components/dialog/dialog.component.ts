import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { ColorObject } from '../../app.interface';

import { BoxComponent } from '../box/box.component';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [BoxComponent, MatDialogContent, MatFormFieldModule, MatDialogActions, MatDialogClose, MatInputModule, FormsModule],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css'
})
export class DialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public colors: ColorObject[],
    ) { }

    selectChoice(color: ColorObject) {
        console.log(color);
        this.closeDialog(color);
    }

    closeDialog(data?: ColorObject) {
        this.dialogRef.close(data);
    }

}
