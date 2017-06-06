import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversComponent } from './drivers/drivers.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

const routes: Routes = [
  { path: '', component: DriversComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'constructors', component: ConstructorsComponent },
  { path: 'driver-details/:name', component: DriverDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
