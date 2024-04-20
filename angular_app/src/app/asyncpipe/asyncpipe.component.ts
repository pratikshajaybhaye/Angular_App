import { Component, OnInit } from '@angular/core';
import { PromiseService } from '../services/promise.service';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {
  data!: string[];
  constructor(private promiseService: PromiseService) { }

  ngOnInit(): void {

    this.promiseService.fetchData().then((data) => {
      this.data = data;
    });
  }

}
