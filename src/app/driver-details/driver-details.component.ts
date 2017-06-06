import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DriverService } from '../core/service/driver.service';
import { IDetails } from '../core/entities/driverDetails';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  driverDetails: IDetails[] = new Array();
  constructor(private driverService: DriverService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let name = this.route.snapshot.params['name'];
    this.loadDriverServices(name);
  }

  loadDriverServices(name: any) {
    this.driverService.getDriverByName(name)
      .subscribe(data => this.driverDetails = data,
      err => console.log(err));
  }

}
