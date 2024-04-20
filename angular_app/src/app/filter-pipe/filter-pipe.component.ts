import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {
  users: any;

  namesearch: string = '';
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    this._demoService.getUsers().subscribe(res => {
      console.log(res); // 10 users 
      this.users = res;
    })
  }

}
