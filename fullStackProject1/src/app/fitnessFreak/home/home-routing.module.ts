import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { YogaComponent } from '../yoga/yoga.component';
import { AerobicsComponent } from '../aerobics/aerobics.component';
import { ZumbaComponent } from '../zumba/zumba.component';
import { DanceComponent } from '../dance/dance.component';
import { GymComponent } from '../gym/gym.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'yoga',
    component: YogaComponent
  },
  {
    path:'aerobics',
    component: AerobicsComponent
  },
  {
    path:'zumba',
    component: ZumbaComponent
  },
  {
    path:'dance',
    component: DanceComponent
  },
  {
    path:'gym',
    component: GymComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
