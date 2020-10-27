import { ChannelPartner } from '../interfaces/channelPartner';
import { BillingAddressDetails } from '../interfaces/billingAddressDetails';
//import { SocietyBankDetails } from '../societyBankDetailsOperations/societyBankDetails';

export class Society {
    societyId: number;
   societyName:string;
   societyUniqueName:string;
 
  wingNumberOfBuildings:number;
  typeOfPropertyFlatType:string;
  numberOfFlats:number;
  gstNumber:string;
  tanNumber:string;
  panNumber:string;
  societyRegistrationNumber:string;
  monthlyMaintenanceCharges:number;
  channelPartnerSocietyId: ChannelPartner = new ChannelPartner();
  societyAddressIdFk: BillingAddressDetails = new BillingAddressDetails();
  
}