import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-assign',
  templateUrl: './data-binding-assign.component.html',
  styleUrls: ['./data-binding-assign.component.css']
})
export class DataBindingAssignComponent {
  
  InputValue:string = ' ';
 
  constructor() { 
  }

  onnClickMe() {
    this.InputValue = "Beautiful Place";
  }
}
