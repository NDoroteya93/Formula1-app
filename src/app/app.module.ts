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
import { DriverDetailsComponent } from './driver-details/driver-details.component';

// Services
import { FormulaService } from './core/service/formula.service';
import { ConstructorsService } from './core/service/constructors.service';
import { CircuitsService } from './core/service/circuits.service';
import { DriverService } from './core/service/driver.service';
import { LocalStorageService } from './core/service/local-storage.service';
import { LoaderScreenComponent } from './loader-screen/loader-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DriversComponent,
    CircuitsComponent,
    ConstructorsComponent,
    DriverDetailsComponent,
    LoaderScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [
    FormulaService,
    ConstructorsService,
    CircuitsService,
    DriverService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
