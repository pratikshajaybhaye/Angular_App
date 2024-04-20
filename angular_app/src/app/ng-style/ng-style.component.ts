import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  colorVal: string = 'Green';

  items = [
    {name: 'Item1', status: 'active'},
    {name: 'Item2', status: 'inactive'},
    {name: 'Item3', status: 'active'},

  ]

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    
    this._demoService.getTodos().subscribe(res => {

      console.log(res);
    })

  }

}
