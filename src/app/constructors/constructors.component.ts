import { Component, OnInit } from '@angular/core';

import { ConstructorsService } from '../core/service/constructors.service';
import { IConstructor } from '../core/entities/constructorsList';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
constructorList: any;

  constructor(private constructorService: ConstructorsService) { }
  ngOnInit() {
      return this.constructorService.getConstructors()
            .subscribe(data => this.constructorList = data,
            err => console.log(err));
  }

}
