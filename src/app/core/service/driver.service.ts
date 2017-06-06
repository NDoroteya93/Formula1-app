import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DETAILS_URL, BASE_URL } from '../app-constants';
import { IDetails } from '../entities/driverDetails';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DriverService {

  private headers: Headers;
  private params: URLSearchParams;
  private _JSON: any;

  constructor(private http: Http) {
    this.params = new URLSearchParams();
    this._JSON = JSON;

    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getDriverByName(name: any): Observable<IDetails[]> {
    return this.http.get(DETAILS_URL + name + ".json", { headers: this.headers })
      .map(response => <IDetails[]>response.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
