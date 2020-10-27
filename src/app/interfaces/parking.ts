import { Occupancy } from '../interfaces/occupancy';
import { filter } from 'rxjs/operators';
export class Parking {
  parkingNumber:string;
  flatId:number;
 parkingType: string;
    parkingArea: number;
    // unitDetailsIdFk: Occupancy = new Occupancy();
  filter: any;
  countOfAvailParkingSlots:number
}
  




