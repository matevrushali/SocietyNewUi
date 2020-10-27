import {Occupancy} from '../interfaces/occupancy';
import {Parking} from  '../interfaces/parking';
import { UsersFormDetails } from '../interfaces/userFormDetails';

import { from } from 'rxjs';
export class ResidentVehicle {
  residentVehicleId:number;
//  occDetailsIdFk: Occupancy = new Occupancy();
//  resident:string;
 userIdFk:UsersFormDetails = new UsersFormDetails();
 parkingIdFk: Parking = new Parking();
  vehicleNumber:string;
  make:string;
   model:string;
   type:string;
   insuranceExpiryDate:number;
   insuranceCompany:string;
   stickerIssued:string;
  
}