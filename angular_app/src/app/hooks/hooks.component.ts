import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked
 ,AfterViewInit,AfterViewChecked, OnDestroy
{
  @Input() fromChild : any;

  @Input() fromParentColor : any; // red
  username:string ='Jack';
  urAGe: number=28;

  @ViewChild('childhook', { static: false}) viewchild!: ElementRef;

  @ContentChild('child', { static: false })
  contentChild!: ElementRef;

  counter: any;
  num: number = 1;

  subscription!: Subscription;

  constructor(private _demoService: DemoService) { }

  ngOnDestroy(): void {

    console.log('ngOnDestroy called');
 
    clearInterval(this.counter);
 
    this.subscription.unsubscribe();
 
   }
  ngAfterViewChecked(): void { 

    console.log('ngAfterViewChecked called', this.viewchild);

    this.viewchild.nativeElement.setAttribute('style',`color:${this.fromParentColor}`);

  }

  ngAfterViewInit(): void {

    console.log('ngAfterViewInit called', this.viewchild);

    this.viewchild.nativeElement.setAttribute('style',`color:${this.fromParentColor}`);

  }
  ngAfterContentChecked(): void {
    this.contentChild.nativeElement.setAttribute('style', `color:${this.fromParentColor}`);
    }
    
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called', this.contentChild);
     this.contentChild.nativeElement.setAttribute('style', 'color: green');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
    // api 
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // fetching initial data from a backebd API
    this.subscription =  this._demoService.getUsers().subscribe(res => {
      console.log(res);
    });

    this.subscription = this._demoService.getPosts().subscribe(res => {
    console.log(res);
    });

    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000)
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

    console.log('ngOnChanges called', this.fromChild);

    // api 

  }
}
