import { Http, Response, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DRIVERS_URL, CIRCUITS_URL, CONSTRUCTORS_URL, DETAILS_URL, BASE_URL } from '../app-constants';
import { IDrivers } from '../entities/driversList';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormulaService {
    private params: URLSearchParams;
    private _JSON: any;

  constructor(private http: Http) {
        this.params = new URLSearchParams();
        this._JSON = JSON;
    }
    getDrivers(): Observable<IDrivers[]> {
        return this.http.get(DRIVERS_URL) 
            .map(response => <IDrivers[]>response.json());
        //.catch(this.handleError);
    }

      private handleError(error: Response) {
        //  return Observable.throw(error.json().error || 'Server error');
    }

}
