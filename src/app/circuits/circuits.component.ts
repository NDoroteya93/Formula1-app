import { Component, OnInit } from '@angular/core';

import { CircuitsService } from '../core/service/circuits.service';
import { IConstructor } from '../core/entities/constructorsList';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {

 circuitsList: any;

  constructor(private circuitsService: CircuitsService) { }
  ngOnInit() {
      return this.circuitsService.getCircuits()
            .subscribe(data => this.circuitsList = data,
            err => console.log(err));
  }

}
