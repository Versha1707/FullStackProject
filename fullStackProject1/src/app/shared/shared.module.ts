import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule, 
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatProgressBarModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatMomentDateModule,
    NgxMatTimepickerModule,
    MatSelectModule
  ]
})
export class SharedModule { }
