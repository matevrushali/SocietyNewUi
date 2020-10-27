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
  selector: 'app-add-resident-vehicle',
  templateUrl: './add-resident-vehicle.component.html',
  styleUrls: ['./add-resident-vehicle.component.css']
})
export class AddResidentVehicleComponent implements OnInit {
  registerForm: FormGroup;
  usersForm$:Object;
  
  occupancy$: Object;
  parking$: Object;
  usersForm: any;
  temp:Object;
  parking: Parking= new Parking();
  residentVehicle: ResidentVehicle = new ResidentVehicle();
  submitted = false;
  typeTitle=["Two Wheeler","Four Wheeler"]
  stickerTitle=["YES","NO"]
  userID: any; 
  userID1:any;
  filteredResidentDetails: ResidentVehicle[] = []
  constructor(private data: OccupancyService,private data1: ParkingService,private residentVehicleService : ResidentVehicleService,private data2:ResidentVehicleService,private router: Router,private formBuilder: FormBuilder,private data3: UsersFormService) { }
  
  ngOnInit() {
  // this.data.getOccupancy().subscribe(
  // data => this.occupancy$ = data 
  // );
  this. data3.getAllUsersFormDetails().subscribe(
      data3 => this.usersForm$ =  data3 
    );
  this.data1.showAllAvailableParkings().subscribe(
  data1 => this.parking$ = data1 
  );
  this.data2.showAllResidentVehicle().subscribe(
  data2 => this.usersForm= data2 
  );
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
  
  newResidentVehicle(): void {
  this.submitted = false;
  this.residentVehicle = new ResidentVehicle();
  }
  save(){
  this.residentVehicleService.createResidentVehicle(this.residentVehicle)
  .subscribe(data => {
  this.router.navigate(['residents/resident_vehicle_list'])
  alert("Successfully Saved Resident Vehicle")}, error => alert("Unable to Save Resident Vehicle"));
  this.residentVehicle = new ResidentVehicle();
  
  }
  onSubmit() {
  //console.log(this.parking.numberOfSocieties);
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