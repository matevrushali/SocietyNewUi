import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportResidentsComponent } from './ImportResidents/import-residents/import-residents.component';
import { ImportFlatsUnitsComponent } from './import-flats-units/import-flats-units.component';
import { ImportParkingComponent } from './import-parking/import-parking.component';

const routes: Routes = [{
  path: '',
  data: {
    breadcrumb: 'Imports',
    status: true
  },
  children: [
    {
      path: 'import_resident',
      component: ImportResidentsComponent,
      data: {
        breadcrumb: 'Import Residents ',
        status: true
      },
    },
    {
      path: 'import_flats_unit',
      component: ImportFlatsUnitsComponent,
      data: {
        breadcrumb: 'Import Units ',
        status: true
      },
    },
    {
      path: 'import_parking',
      component: ImportParkingComponent,
      data: {
        breadcrumb: 'Import Parkings ',
        status: true
      },
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
