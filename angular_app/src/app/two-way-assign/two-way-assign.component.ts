import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-assign',
  templateUrl: './two-way-assign.component.html',
  styleUrls: ['./two-way-assign.component.css']
})
export class TwoWayAssignComponent implements OnInit {

  userName : string = ' ';
  constructor() { }

  ngOnInit(): void {
  }
checkResetUsername(){
  this.userName='';
}

}
