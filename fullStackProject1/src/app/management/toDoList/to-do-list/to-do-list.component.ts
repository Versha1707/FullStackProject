import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  addTask(val:any){
    console.log("Value of Input: ",val);
  }

  delete(){
    console.log("deleted");
  }
}
