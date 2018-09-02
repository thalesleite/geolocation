import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Location } from './location';

@Injectable({providedIn: 'root'})

export class LocationService {

	private urlIpStack = 'http://api.ipstack.com/134.201.250.155?access_key=cdd71592144e0e430d82d115c534ae44';

  constructor(private http: HttpClient) { }

  getMyLocation() {
		return this.http.get(this.urlIpStack, {observe: 'response'});
	}

}
