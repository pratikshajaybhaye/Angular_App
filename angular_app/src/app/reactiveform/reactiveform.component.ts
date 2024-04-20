import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm!: FormGroup; // only decalaration

  constructor(private fb: FormBuilder,private _demoService: DemoService) {
    this.createReactiveForm();
   }

  ngOnInit(): void {
   
    // this.myReactiveForm.setValue({
    //   'email': 'jalndhar@gmail.com',
    //   'password': '1234567'
     
    // });

    this.myReactiveForm.patchValue({
      'email': 'virbhdra@gmail.com'
    })
    console.log(this._demoService.reverseString('Pratiksha'));

  }

  // Getter for easier access to hobbies from array.
  get hobbiesFormArray() {
    return this.myReactiveForm.get('hobbies') as FormArray;
   }

  createReactiveForm() {

    this.myReactiveForm = this.fb.group({
      'email': new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(50), this.EmailNotAllowed]),
      'password': new FormControl(''),
      'address': this.fb.group({
        'state': new FormControl(),
        'district': new FormControl(),
        'taluka': new FormControl(),
        'village': new FormControl()
      }),
      'hobbies': this.fb.array([])
    })
  }

  onSubmit(){

    console.log(this.myReactiveForm);
    
  }

  // custom validator function 

  EmailNotAllowed(control: FormControl) : ValidationErrors | null {
    
    const emailNotAllowed = ['codemind@gmail.com', 'jack@gmail.com'];

    const value = control.value as string;

    if (emailNotAllowed.indexOf(value) !== -1) {
      return {'emailNotAllowed': true};
    }
    return null
  } 

  addHobby(){
    this.hobbiesFormArray.push(new FormControl(''));
  }

  // onRemove(removeat: number){
  //   this.hobbiesFormArray.removeAt(removeat);
  // }

  removeHobby(index: number) {
    this.hobbiesFormArray.removeAt(index);
  }

}
