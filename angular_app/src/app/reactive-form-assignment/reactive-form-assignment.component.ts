import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  genders = ['Male','Female', 'Transgender'];
  conutries =['India (+91)', 'USA (+1)', 'Russia (+7)']
  myReactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
      this.myReactiveForm = this.fb.group({
      'fullName': new FormControl('',[Validators.required]),
      'YourBirthDate': new FormControl('',[Validators.required]),
      'Gender': new FormControl('',[Validators.required]),
      'country': new FormControl('',[Validators.required]),
      'phone': new FormControl('',[Validators.required]),
      'bio': new FormControl('',[Validators.required, Validators.maxLength(256)]),
      'username': new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(25), Validators.pattern('[a-zA-Z][0-9]')]),
      'email': new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      'password': new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(/^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]),
      'confirmpassword': new FormControl('',[Validators.required]),
      'terms': new FormControl('',[Validators.requiredTrue])
  });
  }

  onSubmit(){
    console.log(this.myReactiveForm.value);
    
  }
}
