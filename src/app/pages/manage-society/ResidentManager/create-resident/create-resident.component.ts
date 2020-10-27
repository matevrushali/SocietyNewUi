import { Component, OnInit } from '@angular/core';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { Occupancy } from '../../../../interfaces/occupancy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersFormService } from '../../../../services/users-form.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-resident',
  templateUrl: './create-resident.component.html',
  styleUrls: ['./create-resident.component.css']
})
export class CreateResidentComponent implements OnInit {

  selectedFile= null;
  addUser: UsersFormDetails = new UsersFormDetails();
  userObject: UsersFormDetails = new UsersFormDetails();
  occupancy: Occupancy = new Occupancy();
  submitted = false;
  userForm: FormGroup;
  showDiv: boolean = false;
  owner: boolean = false;
  tenant: boolean = false;
  residential: boolean = false;
  commercial: boolean = false;
  titleTitle = ["Mr.", "Miss.", "Mrs", "Dr.", "Er."];
  membershipList = ["YES", "NO"];
  ownershipTitle = ["INDIVIDUAL SINGLE", "INDIVIDUAL JOINT", "HUF", "FIRM", "COMPANY", "AOP", "BOI", "ARTIFICIAL/JUDICAL PERSON"];
  propertyTitle = ["RESIDENTIAL", "COMMERTIAL",]
  residentialTitle = ["1 BHK", "1.5 BHK", "2 BHK", "2.5 BHK", "3 BHK", "3.5 BHK", "4 BHK", "4.5 BHK", "Row House", "Banglow", "Villa", "Twin Bungalow", " Open Plot"]
  commercialTitle = ["Shop", "Offices"]
  option = ['Owner', 'Tenant'];
  value: any;
  userDetails$: Object;
  userInfo: any;
  userCount: number;
  userMobileNumber: any;

  constructor(private http: HttpClient,private user: UsersFormService, private occ: OccupancyService, private router: Router, private formBuilder: FormBuilder) { }
  callForm(option) {
    if (option == "Owner") {
      this.owner = true;
      this.tenant = false;
      this.addUser.moveInDate = null;
      this.addUser.moveOutDate = null;

    }
    if (option == "Tenant") {
      this.owner = false;
      this.tenant = true;
    }
  }
  onChangeProperty(value) {

    console.log("I am in method")
    if (value === 'RESIDENTIAL') {
      this.residential = true;
      this.commercial = false;
      this.userForm.get('residential').clearValidators();
      this.userForm.get('residential').updateValueAndValidity();
      // this.userForm.get('propertyType').clearValidators();
      // this.userForm.get('propertyType').updateValueAndValidity();

    } else if (value === 'COMMERTIAL') {

      this.commercial = true;
      this.residential = false;
      this.userForm.get('commercial').clearValidators();
      this.userForm.get('commercial').updateValueAndValidity();
      // this.userForm.get('propertyType').clearValidators();
      // this.userForm.get('propertyType').updateValueAndValidity();

    }

  }
  ngOnInit() {
    this.occ.getOccupancy().subscribe(
      data => { this.occupancy = data }
    )
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
      propertyType: [null],
      residential: [null],
      commercial: [null],
      possetionDate: [null],
      clubMembership: [null],
      ownership: [null],
      moveInDate: [null],
      moveOutDate: [null],

    })

  }
  get f() { return this.userForm.controls; }
  newUsersFormDetailst(): void {

    this.submitted = false;
    this.addUser = new UsersFormDetails();
  }

  save() {
    alert(this.addUser.member);
    this.user.createUsersFormDetails(this.addUser)
      .subscribe(data => {
        this.router.navigate(['society/resident_manager'])
        alert("Successfully Saved")
      }, error => alert("Unable to Save"));

    this.addUser = new UsersFormDetails();

  }
  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    if (this.addUser.moveInDate > this.addUser.moveOutDate) {
      alert('Move in date is greater than move out date.');
      return;
    }
    if (this.addUser != null) {
      this.value = this.addUser.mobileNumber;
      console.log("usermobilenumber", this.value)
      this.focusOutFunction(this.value);
    }
    // this.save();
  }
  focusOutFunction(value) {
    console.log("i am in foucusmethod", this.value)
    debugger;
    var count = 0;
    this.user.getAllUsersFormDetails().subscribe(
      data => {
        console.log("****************8", data);
        this.userDetails$ = data;
        this.userInfo = this.userDetails$;
        this.userCount = Object.keys(this.userInfo).length;
        if (this.userCount == 0) {

          this.save()
        }
        for (var temp of this.userInfo) {
          debugger;
          this.userObject = temp;
          this.userMobileNumber = this.userObject.mobileNumber;
          if (this.userMobileNumber == value) {
            console.log("in if else condition")
             alert("This Mobile Number is taken, Try another.");
            // this.showDiv = true;
            return;
          }
          else {
            count = count + 1;
          }

        }
        if (count > 0) {
          this.save();

        }
      });
  }
  
  onFileSelected(event)
  {
    console.log(event);
    this.selectedFile=event.target.files[0];
  }
  onUpload()
  {
    
  }
  rediectToListDetails(urlObj){
    {
      var url = urlObj.split(',');
      if(url.length > 1)
      {
      var urlParam = parseInt(url[1]);
      if(Number.isNaN(urlParam) == true)
      {
        url[1] = eval(url[1]);
      }
      else
      {
        url[1] = urlParam;
      }
    }
      this.router.navigate(url);
    }
  }

 


}
