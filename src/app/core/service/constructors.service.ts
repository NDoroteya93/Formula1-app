import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { CONSTRUCTORS_URL, BASE_URL } from '../app-constants';
import { IConstructor } from '../entities/constructorsList';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConstructorsService {
    private params: URLSearchParams;
    private _JSON: any;

    constructor(private http: Http) {
        this.params = new URLSearchParams();
        this._JSON = JSON;
    }
    getConstructors(): Observable<IConstructor[]> { 
        return this.http.get(CONSTRUCTORS_URL)
            .map(response => <IConstructor[]>response.json().MRData.ConstructorTable.Constructors);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
