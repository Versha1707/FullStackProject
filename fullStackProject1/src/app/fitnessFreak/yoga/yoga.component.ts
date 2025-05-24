import { Component, inject } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { ClassBookingDialogComponent } from '../class-booking-dialog/class-booking-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent {

  constructor(private dialog:MatDialog) {}

  mode: ProgressBarMode = 'determinate';
  value = 100;
  bufferValue = 75;
  val='Versha'

  openDialog(val:any): void {
    const dialogRef = this.dialog.open(ClassBookingDialogComponent, {
      data: {val},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      // if (result !== undefined) {
      //   this.animal.set(result);
      // }
    });
  }
  
}
