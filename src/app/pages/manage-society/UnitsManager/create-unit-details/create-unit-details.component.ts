import { Component, OnInit } from '@angular/core';
import { Occupancy } from '../../../../interfaces/occupancy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OccupancyService } from '../../../../services/occupancy.service';
import { SocietyService } from '../../../../services/society.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-unit-details',
  templateUrl: './create-unit-details.component.html',
  styleUrls: ['./create-unit-details.component.css']
})
export class CreateUnitDetailsComponent implements OnInit {

  occupancy : Occupancy = new Occupancy();
  submitted = false;
  registerForm: FormGroup;

	society$:Object;
	Flatproperty=["Self","Tenant","Vacant","Commercial unit","Vila","Underconstruction","Construction Completed"]
  soldStatusTitle=["SOLD","UNSOLD"]
  constructor(private occupancyService : OccupancyService,private data: SocietyService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.occupancy.flatOccupancyType = "Self";
    this.data.getSociety().subscribe(
      data => this.society$ = data 
  );
  // this.occupancy.soldStatus = "SOLD";
  this.registerForm = this.formBuilder.group({
    societyOccId: ['', Validators.required],
    meterNo: ['', Validators.required],
    flatNumber: ['', Validators.required],
    floorNumber: ['', Validators.required],
    wingBuilding: ['', Validators.required],
    flatCarpetArea: ['', Validators.required],
    totalBuiltupArea: ['', Validators.required],
    flatOccupancyType: ['', Validators.required],
    sanctionedLoad: ['', Validators.required],
    sanctionedDgLoad: ['', Validators.required],
   
  
});
  }
  get f() { return this.registerForm.controls; }

newOccupancy(): void {
    this.submitted = false;
    this.occupancy = new Occupancy();
  }
  
  save() {
    
    this.occupancyService.createOccupancy(this.occupancy)
      .subscribe(data => {
    this.router.navigate(['society/unit_manager'])
    alert("Successfully Saved");
     
    }, error => alert("Unable to Save"));
    this.occupancy = new Occupancy();
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
  }
 
  refresh(){
   
    this.router.navigate(['society/unit_manager'])
    // this.router.onSameUrlNavigation;
  }
 

  rediectToListDetails(urlObj) {
  
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

