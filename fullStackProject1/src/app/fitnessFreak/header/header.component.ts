import { Component, EventEmitter, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() dataEvent = new EventEmitter<string>();

  tabChanged(event: MatTabChangeEvent) {
    let tabLabel = event.tab.textLabel;
    this.dataEvent.emit(tabLabel);
  }

}
