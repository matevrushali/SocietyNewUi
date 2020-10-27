import { VendorAddress } from '../interfaces/vendorAddress';
export class Vendors {
vendorId:number;
firstName: string;
lastName: string;
email: string;
mobileNumber: number;
panNumber: string;
aadharNumber: string;
//addressfk: number;
addressfk: VendorAddress = new VendorAddress();
function:string;

}
