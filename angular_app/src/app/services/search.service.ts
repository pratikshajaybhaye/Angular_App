import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = "https://en.wikipedia.org/w/api.php"; 
  // inject the httpclinet to make http request
  
  constructor(private _httpClient: HttpClient) { }
  
  getWikipediaData() : Observable<any> {
  
      // create new HttpParams object.
      let params = new HttpParams();
  
      // Append parameters
      params = params.append('action', 'query');
      params = params.append('list', 'search');
      params = params.append('srsearch', 'space');
      params = params.append('utf8', '1');
      params = params.append('format', 'json');
      params = params.append('origin', '*');

      const options = {
        params : params
      }

     return this._httpClient.get(this.apiUrl, options);
    }
}