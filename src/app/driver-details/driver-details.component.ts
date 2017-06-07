import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { LocalStorageService } from '../core/service/local-storage.service';
import { DriverService } from '../core/service/driver.service';
import { IDetails } from '../core/entities/driverDetails';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {

  driverDetails: IDetails[] = new Array();
  viewedDrivers = new Array();
  driversStorage = new Array();
  driver = {};

  constructor(
          private driverService: DriverService, 
          private route: ActivatedRoute, 
          private storageService: LocalStorageService
          ) {}

  ngOnInit() {
    let name = this.route.snapshot.params['name'];
    // this.loadDriverServices(name);

    // Get all drivers 
     this.driversStorage = this.storageService.get('drivers');

    // Get last visited driver from storage
     this.driver = this.driversStorage[this.driversStorage.length - 1];

     // Get all Recently Drivers
    this.driversStorage.forEach(driver => { 
          let fullName: string = driver.Driver.givenName + ' ' + driver.Driver.familyName;
          this.viewedDrivers.push(fullName);
     });

     console.log(this.viewedDrivers);
     console.log(this.driver);
  }

  // loadDriverServices(name: any) {
  //   this.driverService.getDriverByName(name)
  //     .subscribe(data => this.driverDetails = data,
  //     err => console.log(err));
  // }

}
