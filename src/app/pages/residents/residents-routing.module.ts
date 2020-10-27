import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingListComponent } from './ParkingManager/parking-list/parking-list.component';
import { AddParkingComponent } from './ParkingManager/add-parking/add-parking.component';
import { GetParkingDetailsComponent } from './ParkingManager/get-parking-details/get-parking-details.component';
import { UpdateParkingComponent } from './ParkingManager/update-parking/update-parking.component';

import { ResidentVehicleListComponent } from './ResidentVehicle/resident-vehicle-list/resident-vehicle-list.component';
import { AddResidentVehicleComponent } from './ResidentVehicle/add-resident-vehicle/add-resident-vehicle.component';
import { GetResidentVehicleDetailsComponent } from './ResidentVehicle/get-resident-vehicle-details/get-resident-vehicle-details.component';
import { UpdateResidentVehicleComponent } from './ResidentVehicle/update-resident-vehicle/update-resident-vehicle.component';

import { BoradCommitteeListComponent } from './BoardCommittee/borad-committee-list/borad-committee-list.component';
import { AddBoardCommitteeComponent } from './BoardCommittee/add-board-committee/add-board-committee.component';
import { UploadGallaryComponent } from './album/upload-gallary/upload-gallary.component';
const routes: Routes = [{
  path: '',
  data: {
    breadcrumb: 'Residents',
    status: true
  },
  children: [
    {
      path: 'parking_list',
      component: ParkingListComponent,
      data: {
        breadcrumb: 'Parking ',
        status: true
      },
    },
    {
      path: 'add_parking',
      component: AddParkingComponent,
      data: {
        breadcrumb: 'Add Parking ',
        status: true
      },
    },
    {
      path: 'get_parking_details/:parkingId',
      component: GetParkingDetailsComponent,
      data: {
        breadcrumb: 'Parking Details ',
        status: true
      },
    },
    {
      path: 'update_parking/:parkingId',
      component: UpdateParkingComponent,
      data: {
        breadcrumb: 'Update Parking ',
        status: true
      },
    },
    {
      path: 'resident_vehicle_list',
      component: ResidentVehicleListComponent,
      data: {
        breadcrumb: 'Resident Vehicle ',
        status: true
      },
    },
    {
      path: 'add_resident_vehicle',
      component: AddResidentVehicleComponent,
      data: {
        breadcrumb: 'Add Resident Vehicle ',
        status: true
      },
    },
    {
      path: 'get_resident_vehicle_details/:residentVehicleId',
      component: GetResidentVehicleDetailsComponent,
      data: {
        breadcrumb: 'Resident Vehicle Details ',
        status: true
      },
    },
    {
      path: 'update_resident_vehicle/:residentVehicleId',
      component: UpdateResidentVehicleComponent,
      data: {
        breadcrumb: 'Update Resident Vehicle ',
        status: true
      },
    },
    {
      path: 'board_committee_list',
      component: BoradCommitteeListComponent,
      data: {
        breadcrumb: 'Board & Committee ',
        status: true
      },
    },
    {
      path: 'create_board_committee',
      component: AddBoardCommitteeComponent,
      data: {
        breadcrumb: ' Add Board & Committee ',
        status: true
      },
    },
    {
      path: 'upload-gallary',
      component: UploadGallaryComponent,
      data: {
        breadcrumb: 'Album/Gallery ',
        status: true
      },
    },
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentsRoutingModule { }
