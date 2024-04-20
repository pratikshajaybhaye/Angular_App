import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(this.handleError));
  }
  private handleError(error: any): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // Client side or n/w error occured. We can handle this error

      console.error('An error occured', error.error.message);
    } else {
      // backend return am unsuccessful response code.

      console.log('custom error', error.error.message);

      console.error(
        `Backend returned code ${error.status}, body was : ${error.error.message}`
      );
    }
    return throwError(error);
  }
}
