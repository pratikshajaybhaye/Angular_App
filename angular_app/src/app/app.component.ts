import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DemoService } from './services/demo.service';
import { RapidserviceService } from './services/rapidservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_app';
  firstName!: 'Jack';
  test : string [] = [];
  content = `<html>
  <!-- Text between angle brackets is an HTML tag and is not displayed.
  Most tags, such as the HTML and /HTML tags that surround the contents of
  a page, come in pairs; some tags, like HR, for a horizontal rule, stand 
  alone. Comments, such as the text you're reading, are not displayed when
  the Web page is shown. The information between the HEAD and /HEAD tags is 
  not displayed. The information between the BODY and /BODY tags is displayed.-->
  <head>
  <title>Enter a title, displayed at the top of the window.</title>
  </head>
  <!-- The information between the BODY and /BODY tags is displayed.-->
  <body>
  <h1>Enter the main heading, usually the same as the title.</h1>
  <p>Be <b>bold</b> in stating your key points. Put them in a list: </p>
  <ul>
  <li>The first item in your list</li>
  <li>The second item; <i>italicize</i> key words</li>
  </ul>
  <p>Improve your image by including an image. </p>
  <p><img src="http://www.mygifs.com/CoverImage.gif" alt="A Great HTML Resource"></p>
  <p>Add a link to your favorite <a href="https://www.dummies.com/">Web site</a>.
  Break up your page with a horizontal rule or two. </p>
  <hr>
  <p>Finally, link to <a href="page2.html">another page</a> in your own Web site.</p>
  <!-- And add a copyright notice.-->
  <p>© Wiley Publishing, 2011</p>
  </body>
  </html> `;

  color: string = 'red';

  isDestroy: boolean = true;


  constructor(private _demoService: DemoService, private _rapidService: RapidserviceService) {
    // this._demoService.myCustomObs.subscribe(
    //   {
    //     next: (val) => {
    //       console.log(val);
          
    //     }, // next call back
    //     error: (error) => {
    //       console.log(error);
          
    //     }, 
    //     complete: () => {
    //       console.log('Completed');
          
    //     }
    //   }

   
  
    this._demoService.myCustomObs.subscribe((res: string)=> {
  
      console.log(res);
  
     this.test.push(res);
  
    })
  
   }
   ngOnInit(): void {
  

    this._rapidService.getYahooFinance().subscribe(res => {
      console.log(res);
      
    })
  }

  

   sendData(val: any) {

    this.firstName = val;

  }
  ApplyColor(color: any) {
    this.color = color.target.value;
  }

  OnDestroy()
  {
    this.isDestroy = false;
  }
  throwghErrors() {
   
    throw new Error('This is custom error');
  }
}



