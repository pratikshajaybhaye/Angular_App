import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  movies: Movie[] = [

    {title: '3 Idiots', director: 'Rajkumar Hirani', cast: 'Amir', releaseDate: '2009' },

    {title: '12th Fail', director: 'Vidu', cast: 'Vikrant Messy', releaseDate: '2023' },

    {title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022' }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
