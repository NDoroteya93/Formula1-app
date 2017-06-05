import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DriversComponent } from './drivers/drivers.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { ConstructorsComponent } from './constructors/constructors.component';

// Service
import {FormulaService} from './core/service/formula.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DriversComponent,
    CircuitsComponent,
    ConstructorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    FormulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }