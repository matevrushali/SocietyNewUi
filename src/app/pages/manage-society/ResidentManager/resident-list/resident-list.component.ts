import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersFormService } from '../../../../services/users-form.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResidentStaffManagerService } from '../../../../services/resident-staff-manager.service';
import { ResidentStaffManager } from '../../../../interfaces/residentstaffManager';
import { StaffAndMemberAllocation } from '../../../../interfaces/staffAndMemberAllocation';
import { StaffAndMemberAllocationService } from '../../../../services/staff-and-member-allocation.service';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {
  
  dtOptions: any = {}
  dtTrigger = new Subject();
  usersForm$: any;
  userListId:any=[];
  usersFormArr: any = [];
  pageActual: Number = 1;
  privilegesList: string;
  residentStaffManager: any = [];
  listToshow: ResidentStaffManager[];
  list$: any;
  filteredList: ResidentStaffManager[];
  selectedDesignation: any;
  staffAndMemberAllocation: any = {};
  DesignationTypeTitle = ["Maid", "Driver", "Cook", "Iron", "Carpentar", "News Paper", "Teacher", "Car Washer", "Service Provider", "Water Supplier", "Mali"]
  constructor(private data: UsersFormService,
    private router: Router,
    private cookieService: CookieService,
    private residentStaffService: ResidentStaffManagerService,
    private staffMemberAllocationService: StaffAndMemberAllocationService
  ) { }
  ngOnInit() {

    this.data.getAllUsersFormDetails().subscribe(
      data => {
        this.usersForm$ = data;
        this.dtTrigger.next();
      }
    );
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel', 'csv', 'pdf']
    }
    //     this.residentStaffService.showAllResidentStaffManager().subscribe(
    //       data => {
    //         this.residentStaffManager = data;
    // console.log("On init",this.residentStaffManager)
    //       }
    //     );
    this.callResidentList();
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  showSaveButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("saveUsersFormDetails")) {
      return true;
    }
    else {
      return false;
    }
  }
  rediectToPage(urlObj) {

    {
      var url = urlObj.split(',');
      if (url.length > 1) {
        var urlParam = parseInt(url[1]);
        if (Number.isNaN(urlParam) == true) {
          url[1] = eval(url[1]);
        }
        else {
          url[1] = urlParam;
        }
      }
      this.router.navigate(url);
    }
  }
  rediectToDetails(urlObj, otherVal) {

    {
      var url = urlObj.split(',');
      if (url.length > 1) {
        var urlParam = parseInt(url[1]);
        if (Number.isNaN(urlParam) == true) {
          url[1] = eval(url[1]);
        }
        else {
          url[1] = urlParam;
        }
      }
      if (otherVal) {
        url.push(otherVal);
      }
      this.router.navigate(url);
    }
  }


  //  USER SELECTION CHECKBOX IN TABLE
  allSelectedUsers_bool: boolean = false;
  toggleList: boolean = false;
  arr_selectedUsers: any = [];
  selectAllUsers(allSelectedUsers_bool) {
    if (allSelectedUsers_bool == true) {
      this.arr_selectedUsers = [];
      this.usersForm$.map((val) => {
        val.bool = true;
        this.arr_selectedUsers.push({ usersFormId: val.usersFormId, firstName: val.firstName, middleName: val.middleName, lastName: val.lastName });
      })
    }
    else {
      this.usersForm$.map((val) => {
        val.bool = false;
      });
      this.arr_selectedUsers = [];
    }
  }

  checkUserSelectoin(user_obj) {
    debugger;
    this.usersFormArr = this.usersForm$;
    if (user_obj.bool == true) {
      this.arr_selectedUsers.push({
        usersFormId: user_obj.usersFormId,firstName: user_obj.firstName, middleName: user_obj.middleName, lastName: user_obj.lastName
      });
      this.staffAndMemberAllocation.memberId = user_obj.usersFormId;
      console.log("Resident fk id", this.staffAndMemberAllocation.memberId);

this.userListId.push(this.staffAndMemberAllocation.memberId);
    }
   
    else {
      this.arr_selectedUsers.map((val, index) => {
        if (val.usersFormId == user_obj.usersFormId) {
          this.arr_selectedUsers.splice(index, 1);
        }
      });
    }
    console.log("user id list", this.userListId);
    console.log("selected", this.arr_selectedUsers);
    
  }

  residentStaffFkId:any;
  memberStaffAlocation:any = [];
  allocateStaffToResident() {
    this.memberStaffAlocation = [];

for(var i = 0 ; i < this.arr_selectedUsers.length; i++){
  this.memberStaffAlocation.push({
    memberId:this.arr_selectedUsers[i].usersFormId,
    residentStaffFkId: this.residentStaffFkId
  });


  if(i == (this.arr_selectedUsers.length - 1))
  {
    this.staffMemberAllocationService.createStaffAndMemberAllocation(this.memberStaffAlocation)
    .subscribe(data => {

      alert("Successfully Saved ")
    }, error => alert("Unable to Save Due to Technical Error"));
  }
}
// this.staffAndMemberAllocation.memberId = this.userListId;
    
   /*  console.log("Resident fk id", this.staffAndMemberAllocation.residentStaffFkId);
    this.staffAndMemberAllocation = {}; */
  }
  removeFromSelectedList(userObj, index) {
    this.arr_selectedUsers.splice(index, 1);
  }

  //  USER SELECTION CHECKBOX IN TABLE
  filterList(value) {

    console.log("VAALUE", value)

    this.selectedDesignation = value;
    console.log("before filter", this.residentStaffManager)

    // this.residentStaffManager= this.residentStaffManager.filter(x => this.getDesignation(x));
    this.listToshow = this.residentStaffManager.filter(x => this.getDesignation(x));
    console.log("after filter listToshow", this.listToshow)
    // console.log("after filter",this.residentStaffManager)
  }
  getDesignation(value) {
    console.log("value", value);
    console.log("selectedDesignation", this.selectedDesignation)
    return this.selectedDesignation == value.designation;
  }
  callResidentList() {
    this.residentStaffService.showAllResidentStaffManager().subscribe(
      data => {
        this.residentStaffManager = data;

      }
    );
  }


}
