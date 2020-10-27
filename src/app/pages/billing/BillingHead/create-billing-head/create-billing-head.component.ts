import { Component, OnInit } from '@angular/core';
import { BillingHead } from '../../../../interfaces/billingHead';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-billing-head',
  templateUrl: './create-billing-head.component.html',
  styleUrls: ['./create-billing-head.component.css']
})
export class CreateBillingHeadComponent implements OnInit {
  billing : BillingHead = new BillingHead();
  submitted = false;
  registerForm: FormGroup;
  
  
  BillType= ["Recurring","Adhoc"];
  BillingMethod= ["Postpaid","Prepaid"];
  BillCycle= ["Monthly","Quaterly","Half Yearly","Yearly"];
  RoundOff= ["0","1","2"];
  BillOfZeroAmount= ["Yes","No"];
  PickLastBillArrears= ["Yes","No"];
  ReadingDependencies= ["Yes","No"];
  ShowBillToTenants= ["Yes","No"];
  CalculationBasedOnPossessionDate= ["Yes","No"];
  InterestType=["Simple Interest","Cumulative Interest"];
  InterestCalculationMethod=["Percentage per anum (Annual)","Fix charge per cycle","Percentage per day","Fix charge per day","Fix charge per month"];
  TaxOnChequeDishonourCharges=["Yes","No"];
  TaxOnInterest=["Yes","No"];
    constructor(private billingHeadService : BillingHeadService,private router:Router,private formBuilder: FormBuilder) { }
  
    ngOnInit() {
    this.registerForm = this.formBuilder.group({
      billType: ['', Validators.required],
      billCycle: ['', Validators.required],
      billingMethod: ['', Validators.required],
      billName: ['', Validators.required],
  
      roundOff: ['', Validators.required],
      billOfZeroAmount: ['', Validators.required],
      pickLastBillArrears: ['', Validators.required],
      readingDependencies: ['', Validators.required],
      showBillToTenants: ['', Validators.required],
      chequeDishonourCharges: ['', Validators.required],
      calculationBasedOnPossessionDate: ['', Validators.required],
      interestType: ['', Validators.required],
      interestCalculationMethod: ['', Validators.required],
      rateOfInterest: ['', Validators.required],
      interestExemptionLimit: ['', Validators.required],
      sgstRate: ['', Validators.required],
      cgstRate: ['', Validators.required],
      taxExemptionLimit: ['', Validators.required],
      taxOnChequeDishonourCharges: ['', Validators.required],
      taxOnInterest: ['', Validators.required],
      description:[null,Validators.nullValidator]
    
  });
    }
    get f() { return this.registerForm.controls; }
  
    newSociety(): void {
      this.submitted = false;
      this.billing = new BillingHead();
    }
   save() {
      this.billingHeadService.createBillingHead(this.billing)
        .subscribe(data =>{
      this.router.navigate(['billing_heads/billing_heads_list'])
      alert("Successfully saved")
        }, error => alert("Unable to save due to some technical error"));
      this.billing = new BillingHead();
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
  