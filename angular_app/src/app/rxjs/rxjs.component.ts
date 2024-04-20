import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Observable,
  debounceTime,
  filter,
  forkJoin,
  from,
  interval,
  map,
  of,
  take,
  takeLast,
} from 'rxjs';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  constructor(private _demoService : DemoService) {}

  ngOnInit(): void {
    const myObs = new Observable<number>((observer) => {
      observer.next(1);

      observer.next(2);

      observer.next(3);
    });

    // using map operator double each emitted value

    const doubleValues = myObs.pipe(map((value: number) => value * 2));

    doubleValues.subscribe((res) => {
      console.log('from Rxjs comp', res);
    });

    //filter Operator

    const mycustomObs = of(1, 2, 3, 4, 5, 6);

    const newObs = mycustomObs.pipe(
      filter((num) => num % 2 === 0),

      map((num) => num * 2)
    );

    newObs.subscribe((res) => {
      console.log(res);
    });

    //Take Operator

    const numbers = interval(1000);

    const take10 = numbers.pipe(take(10));

    take10.subscribe((res) => {
      console.log('from interval', res);
    });

    //takeLast Operator

    const courses = ['Angular', 'JavaScript', 'HTML', '.NetCore'];

    const myTakeLastObs = from(courses);

    myTakeLastObs.pipe(takeLast(2)).subscribe((res) => {
      console.log('takeLast 2', res);
    });

    //deBounce Operator

    this.myForm.valueChanges.pipe(debounceTime(5000)).subscribe((res) => {
      console.log(res);
    });

    //forkJoin Operator

    const reqPosts: Observable<any> = this._demoService.getPosts();

    const reqUsers: Observable<any> = this._demoService.getUsers();

    const combineData = forkJoin([reqPosts, reqUsers]);

    combineData.subscribe((data) => {
      console.log('forkJoin', data);
    });
  }
}
