import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-host-location',
  templateUrl: './host-location.component.html',
  styleUrls: ['./host-location.component.css']
})
export class HostLocationComponent implements OnInit {
	hostLocation: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  getHostLocation(hostname: string): void {
		this.locationService.getHostLocation(hostname)
			.subscribe(resp => {
					this.hostLocation = [{ 
						ip: resp.body.ip, 
						country: resp.body.country_name, 
						region: resp.body.region_name, 
						city: resp.body.city, 
						zipCode: resp.body.zip, 
						latitude: resp.body.latitude, 
						longitude: resp.body.longitude	
					}];
			});
	}

}
