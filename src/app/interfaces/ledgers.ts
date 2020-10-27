import { Group } from '../interfaces/group';
//import { filter } from 'rxjs/operators';
export class Ledgers {
	accountName:string;
 amountType: string;
    openingBalance: number;
    groupIdFk: Group = new Group();
    ledgerType: string;
    ledgersId: number;
  
}


