import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //this varaiable declare in parentComponent
  // parentMessage = "Practice atleast One Time";

  // parentMessagetwo = "Practice atleast One Concept";

  personObject = {
    name: 'Jack Sparrow',
    age: '47',
    dob: '11-11-1988'
  }

  constructor() { }

  ngOnInit(): void {
  }

  // receiveMessage(message: string){
   
  //   console.log('from child', message);
    
  // }

  receiveMessages(message: any){
   
    console.log('from child', message);
    
  }

}
