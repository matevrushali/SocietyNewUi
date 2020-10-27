import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { GenerateBillService } from '../../../../services/generate-bill.service';


@Component({
  selector: 'app-update-adhoc-bill',
  templateUrl: './update-adhoc-bill.component.html',
  styleUrls: ['./update-adhoc-bill.component.css']
})
export class UpdateAdhocBillComponent implements OnInit {

  adhocGenerateBill$ : GenerateBill= new GenerateBill();
  adhocBill:GenerateBill = new GenerateBill();
  // generate: GenerateBill = new GenerateBill();
  occupancy$:Object;
  registerForm: FormGroup;

  submitted = false;
  billingHead$:object;
  typeTitle=["Society Booking"]
  typeBillFor = ["All", "Selected Tower", "Single/Multiple Flat Selected"]
  DueDate= ["1 week","10 Days","15 Days","20 Days","Choose Date"];
  GracePeriod = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Day', '7 Days', '8 Days', '9 Days', '10 Days']
  isExcludeFlat:boolean=false;
  isBlockTower:boolean=false;
  isSingleMultiple:boolean=false;
  isChooseDueDate: boolean = false;
  occupancyBlock$: Object;

  constructor( private data1:BillingHeadService,private data2:OccupancyService,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private data:GenerateBillService) {
    this.route.params.subscribe( params => this.adhocGenerateBill$ = params.generateBillsId );

   }
   newAdhocGenerateBill(): void {
    this.submitted = false;
     this.adhocBill = new GenerateBill();
 }
 save(){
  console.log("I am in save() method");
    this.data.updateAdhocGenerateBillById(this.adhocGenerateBill$  ,this.adhocBill)
    .subscribe(data =>{
    this.router.navigate(['billing_heads/adhoc_generate_bill'])
    alert("Successfully Updated Adhoc Generate Bill");
    } , error => alert("Unable to update  Adhoc Generate Bill"));
    this.adhocBill = new GenerateBill();
   
 }
  ngOnInit() {
    
    this.data2.getDistinctBlockTower().subscribe( 
      data2 => this.occupancyBlock$ = data2
    );
    this.data.showGenerateBillById(this.adhocGenerateBill$).subscribe(data =>{ console.log("****************8", data); 
    this.adhocBill = data;
    if(this.adhocBill.billFor == 'All'){
      this.isBlockTower = false;
      this.isExcludeFlat = true;
      this.isSingleMultiple = false;
      this.registerForm.get('singleMultipleFlat').clearValidators();
      this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
    }
    else if(this.adhocBill.billFor == 'Selected Tower'){
      this.isBlockTower = true;
      this. isExcludeFlat =true;
      this.isSingleMultiple = false;
      this.registerForm.get('singleMultipleFlat').clearValidators();
      this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
    }
    else if(this.adhocBill.billFor == 'Single/Multiple Flat Selected'){
      this.isSingleMultiple = true;
      this.isBlockTower = false;
      this. isExcludeFlat = false;
      this.registerForm.get('blockTower').clearValidators();
      this.registerForm.get('excludeFlat').clearValidators();
      this.registerForm.get('excludeFlat').updateValueAndValidity();
      this.registerForm.get('blockTower').updateValueAndValidity();
    }
    if(this.adhocBill.dueDate == 'Choose Date')
    {
      this.isChooseDueDate = true;
    }
   else
   {
     this.isChooseDueDate=false;
     this.registerForm.get('chooseDueDate').clearValidators();
     this.registerForm.get('chooseDueDate').updateValueAndValidity();
   }
  }, error =>{console.log("################", error);
  

    
    });
    this.data1.showAllBillingHead().subscribe(
      data1 => this.billingHead$ = data1
      );
    this.data2.getOccupancy().subscribe(
      data2 => this.occupancy$ = data2 
    );
    this.registerForm = this.formBuilder.group({
      excludeFlat:[null],
     blockTower: [null],
     singleMultipleFlat: [null],
     billFor: ['', Validators.required],
      
       date: ['', Validators.required],
       dueDate: ['', Validators.required],
       gracePeriod: ['', Validators.required],
       billNoPrefix: ['', Validators.required],
       billStartNumber: ['', Validators.required],
   
       billingHeadIdFk: ['', Validators.required],
       chooseDueDate:[null,Validators.nullValidator],
     
     });
     


          }
          get f() { return this.registerForm.controls; }

      
          callFlatBlock(value){
            if (value === "All"){
            this.isBlockTower = false;
            this.isExcludeFlat = true;
            this.isSingleMultiple = false;
           
            
            }	
            else {
            this.isExcludeFlat = false;
            this.isBlockTower = true;
            this.isSingleMultiple = true;
            
            }
            if(value === "Selected Tower"){
            
            this.isBlockTower = true;
            this. isExcludeFlat =true;
            this.isSingleMultiple = false;
          
            }
            else{
            this.isBlockTower = false;
            this. isExcludeFlat = false;
            this.isSingleMultiple = true;
            
            }
            if(value === "Single/Multiple Flat Selected"){
            
            this.isSingleMultiple = true;
            this.isBlockTower = false;
            this. isExcludeFlat = false;
            this.registerForm.get('blockTower').clearValidators();
            this.registerForm.get('excludeFlat').clearValidators();
            this.registerForm.get('excludeFlat').updateValueAndValidity();
            this.registerForm.get('blockTower').updateValueAndValidity();
            }
            else{
            this.isSingleMultiple = false;
            this.isBlockTower = true;
            this. isExcludeFlat = true;
            
            }
            }
        
          

  
            callDueDate(value){
              if (value === 'Choose Date') {
                this.isChooseDueDate = true;
               }
              else if(value==='1 week'){
                this.isChooseDueDate = false;
              }
              else if(value==='10 Days'){
                this.isChooseDueDate =false;  
              }
              else if(value==='15 Days'){
                this.isChooseDueDate = false;
              }
              else if(value==='20 Days'){
                this.isChooseDueDate = false;
              }
              
            }
        
        
  onSubmit() {
    debugger
      console.log("I am in onSubmit method");
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
  }

  
  rediectToListDetails(urlObj) {

    {
      var url = urlObj.split(',');
      if (url.length > 1) {
        var urlParam = parseInt(url[1]);
        if (Number.isNaN(urlParam) == true) {
          url[1] = eval(url[1]);
        }
        else {
          url[1] = urlParam;
        }
      }
      this.router.navigate(url);
    }
  }



}
