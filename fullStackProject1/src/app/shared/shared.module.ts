import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


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
    MatIconModule
  ]
})
export class SharedModule { }
