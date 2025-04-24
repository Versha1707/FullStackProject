import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './toDoList/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./loginModule/login.module').then(m => m.LoginModule)
  },
  {
    path:'toDoList',
    loadChildren:() => import('./toDoList/to-do-list.module').then(m => m.ToDoListModule)
  },
  {
    path:'',
    component:ToDoListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
