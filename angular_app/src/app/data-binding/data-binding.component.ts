import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  firstName: string = "Jack";
  lastName: string = "Sparrow";

  employee = {
    id: '101',
    name: 'jack'
  }

  isDisabled: boolean = false;
  imageUrl: string = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg';
 
  disableButton() {
    this.isDisabled = true;
  }
  constructor() { }
}
