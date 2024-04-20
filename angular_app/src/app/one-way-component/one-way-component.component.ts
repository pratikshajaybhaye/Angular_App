import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-component',
  templateUrl: './one-way-component.component.html',
  styleUrls: ['./one-way-component.component.css']
})
export class OneWayComponentComponent {

  typedName: string =' ';
  constructor() { }

onNameChange(event:any){
// let val = event.target.value;  Two ways we can do
// this.typedName = val;
this.typedName = event.target.value;
}
}
