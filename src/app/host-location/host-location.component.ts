import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-host-location',
  templateUrl: './host-location.component.html',
  styleUrls: ['./host-location.component.css']
})
export class HostLocationComponent implements OnInit {
	@Input('newHostName') hostname: string;
	hostLocation: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.hostname.currentValue);

    this.locationService.getHostLocation(this.hostname)
			.subscribe(resp => {
					console.log(resp);
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
