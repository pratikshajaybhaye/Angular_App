import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

   constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // modify the response data
          const modifiedResponse = event.clone({
            body: {
              // ...event.body,
              data: event.body,
              message: 'This is modify response',
            },
          });
          console.log('modifiedResponse', modifiedResponse);
          return modifiedResponse;
        }
        return event;
      })
    );
  }
}