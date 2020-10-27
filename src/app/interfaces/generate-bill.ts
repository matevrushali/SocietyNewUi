import {Occupancy} from '../interfaces/occupancy';
import { BillingHead } from '../interfaces/billingHead';
export class GenerateBill {

	generateBillsId: number;
	billFor: string;
	billType: string;
	billPeriod: string;
	year: number;
	date: Date;
	dueDate: string;
	gracePeriod: string;
	billStartNumber: number;
	billNoSuffix: string;
	startDate: number;
	endDate: number;
	excludeFlat: String;
	singleMultipleFlat:any = [];
	blockTower: string;
	billNoPrefix: string;
	chooseDueDate:number;
	billingHeadIdFk: BillingHead = new BillingHead();//FK in RoleManagement
	isAdhoc:Boolean;
	flatName:string;
	wingName:string;
	recievedAmount:number;
  pendingAmount:number;
	  billingAmount:number;
	  totalBilling:number;
	  totalRecieved:number;
	  totalPending:number;
	//   totalBillingAgainstBillHead:number;
}
