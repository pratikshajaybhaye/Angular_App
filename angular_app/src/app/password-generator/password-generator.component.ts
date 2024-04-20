import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnGenerate(myForm: NgForm){

    console.log('form submitted', myForm.value); 

  }
}
