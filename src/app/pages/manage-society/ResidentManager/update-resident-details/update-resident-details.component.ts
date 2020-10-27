import { Component, OnInit } from '@angular/core';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { Occupancy } from '../../../../interfaces/occupancy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersFormService } from '../../../../services/users-form.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-resident-details',
  templateUrl: './update-resident-details.component.html',
  styleUrls: ['./update-resident-details.component.css']
})
export class UpdateResidentDetailsComponent implements OnInit {
  userId: UsersFormDetails = new UsersFormDetails();
  userUpdate: UsersFormDetails = new UsersFormDetails();
  occupancy: Occupancy = new Occupancy();
  owner: boolean = false;
  tenant: boolean = false;
  residential: boolean = false;
  commercial: boolean = false;
  submitted = false;
  userForm: FormGroup;
  value: any;
  userDetails$: Object;
  userInfo: any;
  userCount: number;
  userMobileNumber: any;
  userObject: UsersFormDetails = new UsersFormDetails();

  option: string[] = ['Owner', 'Tenant'];
  propertyTitle = ["RESIDENTIAL", "COMMERTIAL",]
  residentialTitle = ["1 BHK", "1.5 BHK", "2 BHK", "2.5 BHK", "3 BHK", "3.5 BHK", "4 BHK", "4.5 BHK", "Row House", "Banglow", "Villa", "Twin Bungalow", " Open Plot"]
  commercialTitle = ["Shop", "Offices"]
  membershipList = ["YES", "NO"];
  ownershipTitle = ["INDIVIDUAL SINGLE", "INDIVIDUAL JOINT", "HUF", "FIRM", "COMPANY", "AOP",
    "BOI", "ARTIFICIAL/JUDICAL PERSON"];
  constructor(private user: UsersFormService, private occ: OccupancyService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.userId = params.usersFormId);
  }
  newUserUpdate(): void {
    this.submitted = false;
    this.userUpdate = new UsersFormDetails();
  }
  onChangeProperty(value) {

    console.log("I am in method")
    if (value === 'RESIDENTIAL') {
      this.residential = true;
      this.commercial = false;
      this.userForm.get('residential').clearValidators();
      this.userForm.get('residential').updateValueAndValidity();
    } else if (value === 'COMMERTIAL') {

      this.commercial = true;
      this.residential = false;
      this.userForm.get('commercial').clearValidators();
      this.userForm.get('commercial').updateValueAndValidity();

    }

  }
  get f() { return this.userForm.controls; }
  ngOnInit() {
    this.user.getUsersFormDetailsDetailsById(this.userId).subscribe(
      data => {
        this.userUpdate = data
        if (this.userUpdate.member == "Owner") {
          this.owner = true;
        }
        if (this.userUpdate.propertyType == "RESIDENTIAL") {
          this.residential = true;
          this.userForm.get('residential').clearValidators();
          this.userForm.get('residential').updateValueAndValidity();
        }
        if (this.userUpdate.propertyType == "COMMERTIAL") {
          this.commercial = true;
          this.userForm.get('commercial').clearValidators();
          this.userForm.get('commercial').updateValueAndValidity();
        }
        if (this.userUpdate.member == "Tenant") {
          this.tenant = true;
          this.owner = false;



        }

      }

    );
    debugger;
    this.occ.getOccupancy().subscribe(
      Occupancy => this.occupancy = Occupancy
    );
    this.userForm = this.formBuilder.group({
      member: [null],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      unitDetailsIdFk: ['', Validators.required],
      alternateNumber: ['', Validators.required],
      landlineNumber: [null],
      intercomNumber: [null],
      residential: [null],
      commercial: [null],
      billingAddress: [null],
      propertyType: [null],
      clubMembership: [null],
      ownership: [null],
      possetionDate: [null],
      moveInDate: [null],
      moveOutDate: [null]

    });




  }
  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    this.save();
  }


  save() {
    debugger;
    console.log(this.userUpdate.member);
    this.user.updateUsersFormDetails(this.userId, this.userUpdate)
      .subscribe(data => {
        this.router.navigate(['society/resident_manager'])
        alert("Successfully Updated User")
      }, error => alert("Unable to Update Due To Techniacl Error"));
    this.userUpdate = new UsersFormDetails();
  }
  callForm(option) {
    if (option == "Owner") {
      this.owner = true;
      this.tenant = false;
    }
    if (option == "Tenant") {
      this.owner = false;
      this.tenant = true;
      this.commercial = false;
      this.residential = false;
    }
  }
  myFunction() {

    this.router.navigate(['usersFormDetails'])
  }
}

