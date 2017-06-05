import { Component, OnInit, Input, ViewContainerRef, EventEmitter } from '@angular/core';
import { FormulaService } from '../core/service/formula.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'], 
   providers: [ FormulaService ]

})
export class DriversComponent implements OnInit {
    PageTitle: string = 'Wish List';
    driversList: any;
    private FormulaService;
    constructor( formulaService: FormulaService) {

    }

     ngOnInit() {
            // var driversList = this.formulaServices.getDrivers()
            //     .subscribe(data => this.driversList = data);  
    }

}
