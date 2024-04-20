import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  

  constructor() { }

  // Method that returns a promise
fetchData(): Promise<string[]> {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Travelling', 'Coding', 'Tracking']);
    }, 2000); // Resolves after 2 seconds
  });
}
}
