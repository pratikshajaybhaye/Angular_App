import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDire]'
})
export class CustomDireDirective {

  constructor(private el: ElementRef) { 

    el.nativeElement.style.backgroundColor = 'gray';

  }

}
