import { Component, OnInit } from '@angular/core';
import { ResidentVehicleService } from '../../../../services/resident-vehicle.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { ParkingService } from '../../../../services/parking.service';
import { ActivatedRoute,Router } from "@angular/router";
import { Parking } from '../../../../interfaces/parking';
import { UsersFormService } from '../../../../services/users-form.service';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { ResidentVehicle } from '../../../../interfaces/residentVehicle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-resident-vehicle',
  templateUrl: './update-resident-vehicle.component.html',
  styleUrls: ['./update-resident-vehicle.component.css']
})
export class UpdateResidentVehicleComponent implements OnInit {

  registerForm: FormGroup;
  usersForm$:Object;

	occupancy$: Object;
parking$: Object;
usersForm: any;
temp:Object;
userID: any;
filteredResidentDetails: ResidentVehicle[] = []

residentVehicleDetails : Object
residentVehicle$ : ResidentVehicle = new ResidentVehicle();
residentVehicle: ResidentVehicle = new ResidentVehicle();
	submitted = false;
	typeTitle=["Two Wheeler","Four Wheeler"]
stickerTitle=["YES","NO"]
	 constructor(private route: ActivatedRoute, private data: ResidentVehicleService,private data1: OccupancyService,private data2: ParkingService,private data3:ResidentVehicleService,private router: Router,private formBuilder: FormBuilder,private data4: UsersFormService) {
		this.route.params.subscribe( params => this.residentVehicle$ = params.residentVehicleId );
  }
  newResidentVehicle() : void {
	  this.submitted = false;
    this.residentVehicle = new ResidentVehicle();
  }
   save() {
    this.data.updateResidentVehicleById(this.residentVehicle$,this.residentVehicle)
    .subscribe(data => {
this.router.navigate(['residents/resident_vehicle_list'])
alert("Successfully Updated Resident Vehicle")}, error => alert("Unable to update Resident Vehicle"));
   this.residentVehicle = new ResidentVehicle();
  }
   ngOnInit() {this.data.showResidentVehicleById(this.residentVehicle$).subscribe(
      data => this.residentVehicle = data 
  );
  this. data4.getAllUsersFormDetails().subscribe(
    data4 => this.usersForm$ =  data4 
  );
	//  this.data1.getOccupancy().subscribe(
  //     data1 => this.occupancy$ = data1 
  //   );
    this.data2.showAllParking().subscribe(
      data2 => this.parking$ = data2 
    );
    this.data3.showAllResidentVehicle().subscribe(
      data3 => this.usersForm= data3
    );
	
	console.log(this.data);
  console.log(this.residentVehicle$);
  this.registerForm = this.formBuilder.group({
    userIdFk: ['', Validators.required],
    parkingIdFk: ['', Validators.required],
    vehicleNumber: ['', Validators.required],
    make: ['', Validators.required],
    model: ['', Validators.required],
    type: ['', Validators.required],
    insuranceExpiryDate: ['', Validators.required],
    insuranceCompany: ['', Validators.required],
    stickerIssued:[null, Validators.nullValidator]
    
    // stickerIssued: ['', Validators.required],
    
    
    });
    

  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
      }
    this.save();
  }
  callBookingVehicle(value){
  
    console.log("Parking is Available",this.userID);
    

    this.filteredResidentDetails = this.usersForm.filter(usrInfo => {
      this.userID = usrInfo.parkingIdFk.parkingId;
     
      if(this.userID == value){
        console.log("Parking is Not Available",this.userID);
           this.temp = "Parking is Not Available";
            }
      
  });
       
  }

  rediectToListPage(urlObj) {
  
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
