import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  userName: any;

  // inject the utility service

  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe((res) => {
      console.log('from subject comp 1', res);

      this.userName = res;
    });
  }

  ngOnInit(): void {}

  // this function will add the latest value into subject observable

  updateUserName(uname: any) {
    console.log(uname.value);

    this._utilityService.userName.next(uname.value);
  }
}
