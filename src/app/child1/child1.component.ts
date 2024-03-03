import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() data: any[] = [];
  @Output() editRequested = new EventEmitter<any>();

  requestEdit(dataItem: any) {
    this.editRequested.emit(dataItem);
    // this.appService.showUpdateButton = true;
  }
}
