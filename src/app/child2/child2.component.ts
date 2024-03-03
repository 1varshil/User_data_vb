import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component{
  showUpdateButton: boolean = false; 

  @Input() selectedData: any;
  @Output() updateRequested = new EventEmitter<void>();

  requestUpdate(){
    // this.updateRequested.emit();
    this.updateRequested.emit(this.selectedData);
  }
  
}
