import { Component, OnInit, Input, ViewContainerRef, EventEmitter } from '@angular/core';
import { FormulaService } from '../core/services/formula.service';
import { IDrivers } from '../core/entities/driversList';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.scss'],
    providers: [FormulaService]

})
export class DriversComponent implements OnInit {

    driversList: IDrivers[] = new Array();
    constructor(private formulaService: FormulaService) {

    }

    ngOnInit() {
        let self: any;
        let list = this.formulaService.getDrivers()

            .subscribe(data => {
                this.driversList = data
            },
            err => console.log(err));

        console.log(this.driversList);
    }

}
