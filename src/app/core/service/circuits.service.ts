import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import {CIRCUITS_URL, BASE_URL } from '../app-constants';
import { ICircuits } from '../entities/circuitsList';

import { Observable } from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CircuitsService {

    private params: URLSearchParams;
    private _JSON: any;

    constructor(private http: Http) {
        this.params = new URLSearchParams();
        this._JSON = JSON;
    }

    getCircuits(): Observable<ICircuits[]> {
        return this.http.get(CIRCUITS_URL)
            .map(response => <ICircuits[]>response.json().MRData.CircuitTable.Circuits);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
