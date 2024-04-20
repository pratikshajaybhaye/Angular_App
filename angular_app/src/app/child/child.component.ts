import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() childMessage!: string;

  // @Input() childMessage2!: string;

  // @Output() messageToParent = new EventEmitter<string>();

  @Input() objPerson!: any;   //   use insted of any & Object  : {name: string, age : string, dob : string} 

  @Output() objParent = new EventEmitter<any>();
  
  constructor() {

    // console.log(this.childMessage);
    
   }

  ngOnInit(): void {

    // console.log(this.childMessage);

    // console.log(this.childMessage2);

    console.log('getting Object from parent',this.objPerson);
    
  }

  sendMessage() {
    // this.messageToParent.emit('Yes, I have done all the homework');

    this.objParent.emit({
      name: 'Pratiksha Jaybhaye',
      age: '24',
      dob: '12-10-1999'
    })
  }
}
