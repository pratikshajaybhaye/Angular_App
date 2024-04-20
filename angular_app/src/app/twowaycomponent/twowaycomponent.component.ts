import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaycomponent',
  templateUrl: './twowaycomponent.component.html',
  styleUrls: ['./twowaycomponent.component.css']
})
export class TwowaycomponentComponent implements OnInit {

  name : string = "Pratiksha";
  constructor() { }

  ngOnInit(): void {
  }

}
