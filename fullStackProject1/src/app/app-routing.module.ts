import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessFreakComponent } from './fitnessFreak/fitness-freak.component';

const routes: Routes = [
  {
    path:'',
    component:FitnessFreakComponent
  },
  {
    path:'fitness',
    loadChildren:() => import("../app/fitnessFreak/fitness-freak.module").then((m)=>m.FitnessFreakModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
