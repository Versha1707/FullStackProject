import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-class-booking-dialog',
  templateUrl: './class-booking-dialog.component.html',
  styleUrls: ['./class-booking-dialog.component.scss'],
  providers:[DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassBookingDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ClassBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}

  today: any=new Date();
  // selectedDate: Date | null = null;
  // selectedTime: string = ''; 
  // // selectedTime: string = '';

  selectedDate: Date | null = null;
  selectedHour: string = '';
  selectedMinute: string = '';
  selectedPeriod: string = 'AM';

  hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')); // 01 to 12
  minutes = ['00', '15', '30', '45'];


  cancel(){
    this.dialogRef.close();
  }

}


