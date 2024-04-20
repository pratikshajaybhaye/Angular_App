import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalerrorhandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    debugger;
    console.error('An error occured', error.message);

    // you can log this error in DB .
    // we can store this error in any physically place.
  }
}
