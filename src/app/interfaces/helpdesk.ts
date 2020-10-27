import { UsersFormDetails } from '../interfaces/userFormDetails';
export class Helpdesk {
	helpdeskId: number;
	residentOther: string;
	otherAminities: string;
	residentName: string;
	category: string;
	subCategory: string;
	callingPerson: string;
	callingPersonMobile: string;
	description: string;
	priority: string;
	status: string;
//	helpdeskCategoryIdFk: HelpdeskCategory = new HelpdeskCategory();
	residentUserId:string;
	// constructor(){}
	countOfPendingComplains:number;
	countOfOpenComplains:number;
	countOfInProgressComplains:number;
	countOfResolvedComplains:number;
	countOfHoldComplains:number;
	countOfInCancelledComplains:number;
}


