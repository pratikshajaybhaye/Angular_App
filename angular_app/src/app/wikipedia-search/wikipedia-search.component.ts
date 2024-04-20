// wikipedia-search.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css']
})
export class WikipediaSearchComponent {

  namesearch: string = '';
  searchData: any


  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {

    this._searchService.getWikipediaData().subscribe((res: any) => {
      console.log(res);
      this.searchData = res;
      
      })
  }
}
