import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {


  myRegistrationForm! : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createRegistrationForm();
  }

  ngOnInit(): void {


  }
  createRegistrationForm(){

    this.myRegistrationForm = this.fb.group({
      'firstName': new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      'lastName': new FormControl('',[Validators.maxLength(10)]),
      'age': new FormControl('',[Validators.required, Validators.min(17), Validators.max(20)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'phone': new FormControl('',[Validators.maxLength(10),Validators.pattern('[0-9]')]),
      'gender':  new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required]),
      'confirmPassword': new FormControl('',[Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.myRegistrationForm);
    
  }

}


