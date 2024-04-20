import { Component, OnInit } from '@angular/core';
import { RapidserviceService } from '../services/rapidservice.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
// inject the RapidapiService 
data:any;
constructor(private _rapidApiService: RapidserviceService) { }

  ngOnInit(): void {

    this._rapidApiService.getYahooFinance().subscribe((res: any) => {

      this.data = res;
      console.log(res);
      
      // this.data.push(res.news);
        // console.log('rapid get called', this.data );
  
      })


  }

}
