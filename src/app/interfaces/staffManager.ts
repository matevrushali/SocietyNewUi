
import { Vendors } from '../interfaces/vendors';

export class StaffManager{
 staffManagerId:number;
 name:string;
 mobileNumber:number;
 designation:string;
 vendor:string;
 fromTime:string;
 toTime:string;
 dateOfCardIssue:number;
validUpto:number;
category:string;
dateOfBirth:number;
address:string;
  append: any;
  vendorIdFK:Vendors = new Vendors();
 

}
