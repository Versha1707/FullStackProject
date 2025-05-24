import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-class-booking-dialog',
  templateUrl: './class-booking-dialog.component.html',
  styleUrls: ['./class-booking-dialog.component.scss']
})
export class ClassBookingDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ClassBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

today: any=new Date();

}


