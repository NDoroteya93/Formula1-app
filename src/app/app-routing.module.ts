import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversComponent } from './drivers/drivers.component';
// import { CircuitsComponent } from './circuits/circuits.component';
// import { ConstructorsComponent } from './constructors/constructors.component';

const routes: Routes = [
  {path: '',component: DriversComponent}, 
  // {path: 'circuits', component: CircuitsComponent}, 
  // { path: 'constructors', component: ConstructorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
