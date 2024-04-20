import { Component, OnInit } from '@angular/core';
import { singer } from '../models/movie';

@Component({
  selector: 'app-ngforsinger',
  templateUrl: './ngforsinger.component.html',
  styleUrls: ['./ngforsinger.component.css']
})
export class NgforsingerComponent implements OnInit {

   singers : singer[]=[

    {singerName: 'Darshan Raval',favSong: 'Teri Aankhon Mein',released:'2020' },
    {singerName: 'Jubin Nautiyal',favSong: 'Akh Lad Jaave',released:'2018' },
    {singerName: 'Sonu Nigam',favSong: 'Abhi Mujh Mein Kahin',released:'2011' }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
