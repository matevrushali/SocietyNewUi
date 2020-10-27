import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import { ImportResidentsComponent } from './ImportResidents/import-residents/import-residents.component';
import { ImportFlatsUnitsComponent } from './import-flats-units/import-flats-units.component';
import { ImportParkingComponent } from './import-parking/import-parking.component';


@NgModule({
  declarations: [ImportResidentsComponent, ImportFlatsUnitsComponent, ImportParkingComponent],
  imports: [
    CommonModule,
    ImportRoutingModule
  ]
})
export class ImportModule { }
