import { Component, OnInit } from '@angular/core';
import { UsersFormService } from '../../../../services/users-form.service';
import { Occupancy } from '../../../../interfaces/occupancy';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { OccupancyService } from '../../../../services/occupancy.service';
import { ResidentStaffManagerService } from '../../../../services/resident-staff-manager.service';

@Component({
  selector: 'app-change-ownership-page',
  templateUrl: './change-ownership-page.component.html',
  styleUrls: ['./change-ownership-page.component.css']
})
export class ChangeOwnershipPageComponent implements OnInit {
  occupancy$: Object;
  usersFormDetails: UsersFormDetails = new UsersFormDetails();
  usersForm$: UsersFormDetails = new UsersFormDetails();
  occupancy: Occupancy = new Occupancy();
  usersForm: any;//UsersFormDetails[]
  filteredUsersDetails: UsersFormDetails[] = [];
  userID: any;
  residentStaff$: any;
  user$: UsersFormDetails = new UsersFormDetails();
  isgetbyid: boolean = false;
  isuserform: boolean = false;

  constructor(private occupancyService: OccupancyService,private data1: UsersFormService,private residentStaffService:ResidentStaffManagerService) { }

  ngOnInit(): void {
    this.occupancyService.getOccupancy().subscribe(
      data => this.occupancy$ = data
    );
    this.data1.getAllUsersFormDetails().subscribe(
      data1 => {
        this.usersForm = data1

      }
      );
  }
  filterContent(value) {
debugger;
    let isDetailsMatched = false;
   
    this.filteredUsersDetails = this.usersForm.filter(usrInfo => {
    this.userID = usrInfo.unitDetailsIdFk.occupancyDetailsId
    console.log("flat",value);
    console.log("user id",this.userID);
    this.usersForm$=value;
    this.data1.getUsersFormDetailsDetailsByFlatId(this.usersForm$).subscribe(
      data => {
       console.log("****************8", data);
        this.usersFormDetails = data;
  
        
      }, error =>{
        console.log("################", error);
      }
    );
    this.residentStaff$=this.usersFormDetails.usersFormId;
     if (this.userID == value) 
     {
        this.data1.getUsersFormDetailsDetailsById(this.userID).subscribe(data1 => this.user$ = data1);
       console.log("getbyid");
       this.isgetbyid=true;
       this.isuserform=true;
     }
     else
     {
       console.log("Hello");
     }
     
     this.residentStaffService.getResidentStaffInfo(this.residentStaff$).subscribe(
      data => this.residentStaff$ = data );
     
   });
   
 }
}
