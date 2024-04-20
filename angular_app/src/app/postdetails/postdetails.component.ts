import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/posts';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  productId: any;
  post!: Post;
  constructor(private _demoService: DemoService, private route: ActivatedRoute) { 

    console.log('from activeated route', this.route);
    this.route.params.subscribe(params => {
      console.log('params', params);
      this.productId = params['id'];
    });

    this._demoService.getPostById(this.productId).subscribe(res => {
      console.log('post by id', res);
      this.post = res;
    })
  }

  ngOnInit(): void {

  
  }

}
