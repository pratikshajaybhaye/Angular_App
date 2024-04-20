import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {

  dateOfBirth!: string;
  currentDate!: string;
  age: number | null = null;

calculateAge() {
  if (this.dateOfBirth && this.currentDate) {
    
  }
  const dobDate = new Date(this.dateOfBirth);
  const currentDate = new Date(this.currentDate);
  const diff = currentDate.getTime() - dobDate.getTime();
  const ageDate = new Date(diff);
  this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
}

clearAge(){
this.age= null;
this.dateOfBirth='';
this.currentDate='';
}

}



