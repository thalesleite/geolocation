import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Location } from './location';

@Injectable({providedIn: 'root'})

export class LocationService {

	private urlIpStack = 'http://api.ipstack.com/131.255.187.165?access_key=cdd71592144e0e430d82d115c534ae44';

  constructor(private http: HttpClient) { }

  getMyLocation() {
		return this.http.get(this.urlIpStack, {observe: 'response'});
	}

	/** GET host location from the server */
  getHostLocation(hostname: string) {
    return this.http.get(this.getIpStack(hostname), {observe: 'response'});
  }

  getIpStack(hostname: string){
  	return 'http://api.ipstack.com/' + hostname + '?access_key=cdd71592144e0e430d82d115c534ae44';
  }
}
