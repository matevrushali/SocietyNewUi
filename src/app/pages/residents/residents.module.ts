import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';

import { ResidentsRoutingModule } from './residents-routing.module';
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

import { ImagePreview } from '../../helpers/image-directice';

@NgModule({
  declarations: [ImagePreview, ParkingListComponent, AddParkingComponent, GetParkingDetailsComponent, UpdateParkingComponent, ResidentVehicleListComponent, AddResidentVehicleComponent, GetResidentVehicleDetailsComponent, UpdateResidentVehicleComponent, BoradCommitteeListComponent, AddBoardCommitteeComponent, UploadGallaryComponent],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    FileUploadModule,
    FormsModule, ReactiveFormsModule,DataTablesModule
  ],schemas: [ NO_ERRORS_SCHEMA ],
})
export class ResidentsModule { }
