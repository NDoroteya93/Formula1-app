import { Component, OnInit, Input, ViewContainerRef, EventEmitter } from '@angular/core';
import { FormulaService } from '../core/service/formula.service';
import { IDrivers, IDriverStandings } from '../core/entities/driversList';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.scss'],
    providers: [FormulaService]

})
export class DriversComponent implements OnInit {

    driversList: IDriverStandings[] = new Array();
    constructor(private formulaService: FormulaService) {

    }

    ngOnInit() {
        return this.formulaService.getDrivers()
            .subscribe(data => this.driversList = data,
            err => console.log(err));
    }

}
