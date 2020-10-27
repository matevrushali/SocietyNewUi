import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Occupancy } from '../../../../interfaces/occupancy';
import { ActivatedRoute, Router } from '@angular/router';
import { OccupancyService } from '../../../../services/occupancy.service';
import { SocietyService } from '../../../../services/society.service';

@Component({
  selector: 'app-update-unit-details',
  templateUrl: './update-unit-details.component.html',
  styleUrls: ['./update-unit-details.component.css']
})
export class UpdateUnitDetailsComponent implements OnInit {

  registerForm: FormGroup;
occupancy$: Occupancy=new Occupancy();
occ:Occupancy=new Occupancy();
 //this.society = new Society();
	occupancy : Occupancy = new Occupancy();
	submitted = false;
	society :Object;
	Flatproperty=["Self","Tenant","Vacant","Commercial unit","Vila","Underconstruction","Construction Completed"]
  constructor(private route: ActivatedRoute,private data : OccupancyService, private societyfk:SocietyService,private router: Router,private formBuilder: FormBuilder) { 
this.route.params.subscribe( params => this.occupancy$ = params.occupancyDetailsId );

}
newOccupancy(): void {
    this.submitted = false;
    this.occ = new Occupancy();
   
  }
  save() {
   debugger;
    this.data.updateOccupancy(this.occupancy$,this.occ)
      .subscribe(data =>{
    this.router.navigate(['society/unit_manager'])

         alert("Successfully Updated");
      console.log("Id : ",this.occupancy$);
     
    }, error => alert("Unable to save due to some technical error"));
   console.log("Occupancy ID",this.occupancy$);
   console.log("Occupancy ID",this.occ.occupancyDetailsId);
      this.occ = new Occupancy();
      console.log("occ",this.occ);

  }
  
  ngOnInit() {
	  //console.log("I am in Update",occupancyDetailsId);
	  //this.society.societyOccId = new Society();
	  this.data.getOccupancyDetailsById(this.occupancy$).subscribe(
      data => this.occ = data 
  );
  this.societyfk.getSociety().subscribe(
    societyfk => this.society = societyfk 
  );
  this.data.getOccupancyDetailsById(this.occupancy$).subscribe(
      data => this.occ = data 
  );
	console.log(this.data);
  console.log(this.occupancy$);
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

  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
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

