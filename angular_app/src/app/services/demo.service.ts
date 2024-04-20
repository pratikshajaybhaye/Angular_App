import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  myCustomObs = new Observable<any>((observer) => {
    console.log('Observable start');
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
    observer.next('5')
    
  })

  constructor(private _httpClient: HttpClient) { }
  
  reverseString(input: string) {

    let reverse = '';

    for(let i = input.length - 1 ; i >= 0 ; i--) {
        reverse += input[i];
    }
    return reverse;
  }

  getTodos() : Observable<any> {

    // making get call to web server(jsonplaceholder)

  return  this._httpClient.get('https://jsonplaceholder.typicode.com/users');

  }

  getnumbers() {

    return of([1,2,3,4,5,6,7]).pipe(delay(1000));
   
   }
   getUsers() : Observable<any> {
    return  this._httpClient.get('https://jsonplaceholder.typicode.com/users');
   
   }
   getPosts() : Observable<any> {

    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getPostById(id: any) : Observable<Post> {
    return this._httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }

}
