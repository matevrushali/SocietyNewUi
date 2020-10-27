import { Component, OnInit } from '@angular/core';
import { StaffManager } from '../../../../interfaces/staffManager';
import { StaffManagerService } from '../../../../services/staff-manager.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorsService } from '../../../../services/vendors.service';



@Component({
  selector: 'app-add-staff-details',
  templateUrl: './add-staff-details.component.html',
  styleUrls: ['./add-staff-details.component.css']
})
export class AddStaffDetailsComponent implements OnInit {

  staffManager: StaffManager = new StaffManager();
submitted = false;
registerForm: FormGroup;
vendor$:object;
categoryTitle=["Account & Billing","Carpentry","Club House","DG/POWER","Electrical","Fire","Horticulture","House Keeping",
"Intrecom","Lift/Lift Operator","Masonry","Observation","Painter","Parking","Plumbing","Security"]

constructor(private staffManagerService : StaffManagerService,private router:Router,private formBuilder: FormBuilder,private vendorService:VendorsService) { }

  ngOnInit() {
   
    this.registerForm = this.formBuilder.group({
     
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      designation: ['', Validators.required],
      vendorIdFK: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
      dateOfCardIssue: ['', Validators.required],
      validUpto: ['', Validators.required],
      category: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
    
  });

  this. vendorService.getVendors().subscribe(
    data => this.vendor$ =  data 
  );
  }
  get f() { return this.registerForm.controls; }

  
  newStaffManager(): void {
	 this.submitted = false;
    this.staffManager = new StaffManager();
}
save(){
	this.staffManagerService.createStaffManager(this.staffManager)
      .subscribe(data =>{
        this.router.navigate(['society/staff_manager'])
         alert("Successfully Saved Staff Manager")},
         error => alert("Unable to Save Staff Manager"));
    this.staffManager = new StaffManager();
	
}


onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  
  
    this.save();
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

