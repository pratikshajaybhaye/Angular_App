import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidserviceService {

    apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';
// inject the httpclinet to make http request

constructor(private _httpClient: HttpClient) { }

getYahooFinance() : Observable<any> {

    // create new HttpParams object.
    let params = new HttpParams();

    // Append parameters
    params = params.append('q', 'tesla');
    params = params.append('region', 'US');


    // adding HttpParams and HttpHeaders to options 
    const options = {
      params : params
    }

   return this._httpClient.get(this.apiUrl, options);
  }
}
