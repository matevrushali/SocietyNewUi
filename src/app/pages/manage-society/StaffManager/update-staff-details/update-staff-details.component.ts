import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StaffManager } from '../../../../interfaces/staffManager';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffManagerService } from '../../../../services/staff-manager.service';
import { VendorsService } from '../../../../services/vendors.service';

@Component({
  selector: 'app-update-staff-details',
  templateUrl: './update-staff-details.component.html',
  styleUrls: ['./update-staff-details.component.css']
})
export class UpdateStaffDetailsComponent implements OnInit {

  staffManagerDetails : Object
  registerForm: FormGroup;
  vendor$:object;
  
   staffManager$ :StaffManager = new StaffManager();
    staffManager: StaffManager = new StaffManager();
    submitted = false;
    categoryTitle=["Account & Billing","Carpentry","Club House","DG/POWER","Electrical","Fire","Horticulture","House Keeping",
    "Intrecom","Lift/Lift Operator","Masonry","Observation","Painter","Parking","Plumbing","Security"]
    constructor(private route: ActivatedRoute, private data: StaffManagerService,private router:Router,private formBuilder: FormBuilder,private vendorService:VendorsService) {
        this.route.params.subscribe( params => this.staffManager$ = params.staffManagerId );
      }
       newStaffManager(): void {
     this.submitted = false;
      this.staffManager = new StaffManager();
  }
  save(){
     this.data.updateStaffManagerById(this.staffManager$,this.staffManager)
     .subscribe(data => {
      this.router.navigate(['staffManager']) 
    
      alert("Successfully Updated");
     }, error => alert("Unable to update"));
     this.staffManager = new StaffManager();
    
  }
  
    ngOnInit() {this.data.showStaffManagerById(this.staffManager$).subscribe(
        data => this.staffManager = data 
    );
    this. vendorService.getVendors().subscribe(
      data => this.vendor$ =  data 
    );
    console.log(this.data);
    console.log(this.staffManager$);
    this.registerForm = this.formBuilder.group({
     // employeeId: ['', Validators.required],
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
    }
    get f() { return this.registerForm.controls; }
  
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
  