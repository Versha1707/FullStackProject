import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FitnessFreakRoutingModule } from './fitness-freak-routing.module';
import { FitnessFreakComponent } from './fitness-freak.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { WorkoutComponent } from './workout/workout.component';
import { DietComponent } from './diet/diet.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassesComponent } from './classes/classes.component';
import { YogaComponent } from './yoga/yoga.component';
import { ZumbaComponent } from './zumba/zumba.component';
import { GymComponent } from './gym/gym.component';
import { AerobicsComponent } from './aerobics/aerobics.component';
import { DanceComponent } from './dance/dance.component';
import { ClassBookingDialogComponent } from './class-booking-dialog/class-booking-dialog.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';


@NgModule({
  declarations: [
    FitnessFreakComponent,
    HeaderComponent,
    HomeComponent,
    FeedbackComponent,
    WorkoutComponent,
    DietComponent,
    TrackerComponent,
    ContactComponent,
    ProfileComponent,
    ClassesComponent,
    YogaComponent,
    ZumbaComponent,
    GymComponent,
    AerobicsComponent,
    DanceComponent,
    ClassBookingDialogComponent,
  ],
  imports: [
    CommonModule,
    FitnessFreakRoutingModule,
    SharedModule,
    NgxMatTimepickerModule
  ]
})
export class FitnessFreakModule { }
