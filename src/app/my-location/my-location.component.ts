import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.css']
})
export class MyLocationComponent implements OnInit {
	myLocation: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  	this.myLocation = [{ 
			ip: '192.168.1.10', 
			country: 'Teste', 
			region: 'teste', 
			city: 'CC', 
			zipCode: '165-4545', 
			latitude: 1212, 
			longitude: 1565161	
		}];

		this.locationService.getMyLocation()
			.subscribe(resp => {
				console.log(resp.body);
			});
  }
}
