import { Society } from '../interfaces/society';
export class Occupancy {
	occupancyDetailsId:number
	wingBuilding :string;
	flatNumber:number;
	floorNumber:number;
	flatCarpetArea: number;
	totalBuiltupArea:number;
	flatOccupancyType:string;
	sanctionedLoad:number;
	sanctionedDgLoad:number;
	meterNo:number;
	countOfSoldUnit :number;
	countOfUnsoldUnit :number;
    societyOccId: Society = new Society();
}