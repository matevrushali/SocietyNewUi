import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../../services/helpdesk.service';
import { Helpdesk } from '../../../interfaces/helpdesk';
import { ActivatedRoute,Router } from "@angular/router";
import { HelpdeskComponent } from '../helpdesk/helpdesk.component';

import { UsersFormService } from '../../../services/users-form.service';
import { UsersFormDetails } from '../../../interfaces/userFormDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscalationMatrixService } from '../../../services/escalation-matrix.service';

@Component({
  selector: 'app-create-helpdesk',
  templateUrl: './create-helpdesk.component.html',
  styleUrls: ['./create-helpdesk.component.scss']
})
export class CreateHelpdeskComponent implements OnInit {
  helpdeskcategory$: Object;
  helpdesk: Helpdesk = new Helpdesk();
  submitted = false;
  userDetails$:Object;
  $submitted = false;
  registerForm: FormGroup;
  
  ResidentOther= ["Block", "Other facilities"]
  
 priorityTitle = ["Low", "Medium", "High"]
 
 OtherAminities = ["Club","Maintenance Office","Other"]
  
  categoryTitle=["Apartment","Common Area -Non Tower","Common Area -Tower","Others"]
  SubcategoryTitle=["Accounts & Billing","Carpentry","DG/POWER","Electrical","Fire","House Keeping","Intercom","Masonry","Painter","Plumbing"]
  SubCatCANTTitle=["Carpentry","Club House","DG/POWER","Electrical","Fire","Horticulture","House Keeping","Masonry","Painter","Plumbing","Security"]
  SubCatCATTitle=["Carpentry","DG/POWER","Electrical","Fire","House Keeping","Intercom","Lift/Lift Operator","Masonry","Painter","Plumbing"]
  SubCatOthersTitle=["Accounts & Billing","DG/POWER","Electrical","Masonry","Observation","Plumbing","Security"]
  
  
  vvvv:UsersFormDetails= new UsersFormDetails();
  favoriteoption: string;
  result:string;
  isResidentNameVisible: boolean = true;
  isOtherAmenitiesVisible: boolean = false;
  isApartmentSubcategory: boolean = true;
  isCommonANTSubcategory: boolean = false;
  isCommonATSubcategory: boolean = false;
  isOthersSubcategory: boolean = false;  
  category$: Object;
  otherSubcategory$: Object;
  apartmentSubcategory$: Object;
  commonNonTowerSubcategory$: Object;
  commonTowerSubcategory$: Object;
  constructor(private helpdeskService: HelpdeskService,private router: Router,private users:UsersFormService,private formBuilder: FormBuilder,private escalationMatrixService :EscalationMatrixService) { }

  ngOnInit() { 
   
    this.helpdesk.status="open";
  //   this.category.showAllHelpdeskCategory().subscribe(
  //     category => this.helpdeskcategory$ = category 
  // );
  this.escalationMatrixService.getCategoryFromEscalation().subscribe(
    data => this.category$ = data
  );
  this.escalationMatrixService.getOthersSubCategory().subscribe(
    data => this.otherSubcategory$ = data
  );
  this.escalationMatrixService.getApartmentSubCategory().subscribe(
    data => this.apartmentSubcategory$ = data
  );
  this.escalationMatrixService.getCommonAreaNonTowerSubCategory().subscribe(
    data => this.commonNonTowerSubcategory$ = data
  );
  this.escalationMatrixService.getCommonAreaTowerSubCategory().subscribe(
    data => this.commonTowerSubcategory$ = data
  );



  this.users.getAllUsersFormDetails().subscribe(
    users => this.userDetails$ = users
    );
  
  this.registerForm = this.formBuilder.group({
    residentOther: ['', Validators.required],
    category: ['', Validators.required],
    callingPerson: ['', Validators.required],
    callingPersonMobile: ['', Validators.required],
    subCategory: ['', Validators.required],
    priority: ['', Validators.required],
    description:[null, Validators.nullValidator],
    otherAminities: [null],
    residentUserId: [null]
});
  }
  get f() { return this.registerForm.controls; }



  newHelpdesk(): void {
    this.submitted = false;
    this.helpdesk = new Helpdesk();
  }

  save() {
    debugger;
    
    this.helpdeskService.createHelpdesk(this.helpdesk)
      .subscribe(data => {
    this.router.navigate(['helpdesk'])
    alert("Successfully Saved")}, error => alert("Unable to Save"));
    this.helpdesk = new Helpdesk();
  }

  onSubmit() {
    debugger;
    console.log("helpdesk : "+this.helpdesk);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
   
    this.save();
  }

  onChangeResidentValue(value) {
    debugger;
    if (value === 'Block') {
      this.isResidentNameVisible = true;
      this.isOtherAmenitiesVisible = false;
      this.registerForm.get('otherAminities').clearValidators();
      this.registerForm.get('otherAminities').updateValueAndValidity();



    } else if (value === 'Other facilities') {
      this.isResidentNameVisible = false;
      this.isOtherAmenitiesVisible = true;

      this.registerForm.get('residentUserId').clearValidators();
      this.registerForm.get('residentUserId').updateValueAndValidity();


    }
  }
  myFunction(){
   
    this.router.navigate(['helpdesk'])
  }
  onChangesubcategory(value) {
    
    console.log("I am in method")
   if (value==='Apartment') {
     this.isApartmentSubcategory = true;
     this.isCommonANTSubcategory= false;
     this.isCommonATSubcategory = false;
     this.isOthersSubcategory = false;

   } else if (value ==='Common Area -Non Tower') {
    
    this.isApartmentSubcategory = false;
     this.isCommonANTSubcategory= true;
     this.isCommonATSubcategory = false;
     this.isOthersSubcategory = false;
   }else if(value==='Common Area -Tower'){
    this.isApartmentSubcategory = false;
    this.isCommonANTSubcategory= false;
    this.isCommonATSubcategory = true;
    this.isOthersSubcategory = false;
   }
   else if(value==='Others'){
    this.isApartmentSubcategory = false;
    this.isCommonANTSubcategory= false;
    this.isCommonATSubcategory = false;
    this.isOthersSubcategory = true;
   }

  }


}
