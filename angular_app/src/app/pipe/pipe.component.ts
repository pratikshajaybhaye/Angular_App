import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
   date = new Date();
   fullName ='praTiksha jayBhaye';

   price:number = 7000; 

   discount: number= 1.03497;
  
   numbers$!: Observable<number[]>;

  

  constructor( private _demoService : DemoService) { }

  ngOnInit(): void {
   this.numbers$ = this._demoService.getnumbers();
  }

  convertUpperCase(input:string){
    return input.toUpperCase();
  }

}
