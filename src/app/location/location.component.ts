import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   getHostLocation(hostname: string): void {
		console.log(hostname);
	}
}
