import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { LocationService } from '../location.service';
import { HostLocationComponent } from '../host-location/host-location.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
	hostname: string;

  constructor() { }

  ngOnInit() {
  }

  getHostLocation(newHostname: string): void {
		this.hostname = newHostname;
	}
}
