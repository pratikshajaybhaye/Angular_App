import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
   courses = ['JavaScript','HTML', 'Angular','Azure', '.NetCore'];
  defaultCourse:string = 'Azure'
  defaultGender: any = 'Female';

  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ]

  emplyoee = new Employee();

  isSubmitted : boolean = false;


  // inject the demoservice.

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    console.log(this._demoService.reverseString('harry'));
  }

  OnSubmit(myForm: NgForm){
    this.isSubmitted = true;

    console.log('form submitted', myForm); 

    this.emplyoee.username = myForm.value.userDetails.username;
    this.emplyoee.email = myForm.value.userDetails.email;
    this.emplyoee.course = myForm.value.course;
    this.emplyoee.gender = myForm.value.gender;

//saveEmplyoee(this.emplyoee);
  }
//   Onreset(myform: NgForm) {
//     // myform.reset();
//     this.isSubmitted = false;
//     myform.controls['course'].setValue('Azure');
//     myform.controls['gender'].setValue('Female');
// }

onReset(myform: NgForm) {
  this.isSubmitted = false;
 myform.reset();
 myform.controls['course'].setValue('Azure');
 myform.controls['gender'].setValue('Female');
}

}
