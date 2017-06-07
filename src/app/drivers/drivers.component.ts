import { Component, OnInit, Input, ViewContainerRef, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Interfaces
import { IDrivers, IDriverStandings } from '../core/entities/driversList';

// Services and Storages
import { FormulaService } from '../core/service/formula.service';
import { LocalStorageService } from '../core/service/local-storage.service';

import 'rxjs/add/observable/fromPromise';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.scss']

})
export class DriversComponent implements OnInit {

    driversList: IDriverStandings[] = new Array();

    constructor(
        private formulaService: FormulaService,
        private route: ActivatedRoute, private router: Router,
        private storageService: LocalStorageService
    ) { }

    ngOnInit() {
        return this.formulaService.getDrivers()
            .subscribe(data => this.driversList = data,
            err => console.log(err));
    }

    onSelect(driver) {
        this.storageService.save('drivers', driver)

        let name = driver.Driver.givenName + " " + driver.Driver.familyName;
        this.router.navigate(['driver-details', name]);
    }


}
