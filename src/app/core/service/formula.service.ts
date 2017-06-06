import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DRIVERS_URL,BASE_URL } from '../app-constants';
import { IDrivers, IDriverStandings } from '../entities/driversList';

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

    getDrivers(): Observable<IDriverStandings[]> {
        return this.http.get(DRIVERS_URL)
            .map(response => <IDriverStandings[]>response.json().MRData.StandingsTable.StandingsLists[0].DriverStandings);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
