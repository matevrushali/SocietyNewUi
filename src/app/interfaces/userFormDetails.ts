import { Occupancy } from '../interfaces/occupancy';
import { RoleManagement } from '../interfaces/roleManagement';
export class UsersFormDetails {

	usersFormId: number;
	mobileNumber: number;
	alternateNumber: number;
	emailAddress: string;
	ownership: string;
	clubMembership: string;
	landlineNumber: number;
	propertyType: string;
	billingAddress: string;
	intercomNumber: number;
	possetionDate: Date;
//	title: string;
	firstName: string;
	middleName: string;
	lastName: string;
	member: string;
//	roleIdFk: RoleManagement = new RoleManagement();//FK in RoleManagement
	unitDetailsIdFk: Occupancy = new Occupancy();
	commercial: string;
	residential: string;
	countOfOwner:number;
	countOfTenant:number;
	moveInDate: Date;
	moveOutDate: Date;
	password:string;
	tokenNo:string;
	currentPassword:string;
	newPassword:string;
	confirmPassword:string;
	recoveryId:string;
	roleId:number;
	arrear:number;
	totalDebitOfUser:number;
	dues:number;
}
