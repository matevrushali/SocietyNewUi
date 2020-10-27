import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { GenerateBillService } from '../../../../services/generate-bill.service';

@Component({
  selector: 'app-generate-adhoc-bill',
  templateUrl: './generate-adhoc-bill.component.html',
  styleUrls: ['./generate-adhoc-bill.component.css']
})
export class GenerateAdhocBillComponent implements OnInit {

  generate: GenerateBill = new GenerateBill();
  // adhocGenerateBill: AdhocGenerateBill = new AdhocGenerateBill();
  submitted = false;
  occupancy$: Object;
  occupancyBlock$: Object;
  billingHead$: object;
  registerForm: FormGroup;
  typeBillFor = ["All", "Selected Tower", "Single/Multiple Flat Selected"]
  DueDate = ["1 week", "10 Days", "15 Days", "20 Days", "Choose Date"];
  GracePeriod = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days', '6 Day', '7 Days', '8 Days', '9 Days', '10 Days']
  isExcludeFlat: boolean = false;
  isBlockTower: boolean = false;
  isSingleMultiple: boolean = false;
  // isBillType:boolean=false;
  isChooseDueDate: boolean = false;
  constructor(private route: ActivatedRoute, private data: BillingHeadService, private router: Router, private formBuilder: FormBuilder, private data2: OccupancyService, private generateService: GenerateBillService) { }

  ngOnInit() {
    this.generate.isAdhoc = true;
    this.data.showAllAdhocBillingHead().subscribe(
      data => this.billingHead$ = data
    );
debugger;
    this.data2.getOccupancy().subscribe(
      data2 => this.occupancy$ = data2
    );
   
this.data2.getDistinctBlockTower().subscribe( 
  data2 => this.occupancyBlock$ = data2
);
console.log("unitdetails",this.occupancyBlock$);
    this.registerForm = this.formBuilder.group({
      excludeFlat: [null],
      blockTower: [null],
      singleMultipleFlat: [null],
      billFor: ['', Validators.required],
      // excludeFlat:[null, Validators.nullValidator],
      // blockTower: [null, Validators.nullValidator],
      // singleMultipleFlat:[null, Validators.nullValidator],
      // billType: ['', Validators.required],
      //  billPeriod: ['', Validators.required],
      date: ['', Validators.required],
      dueDate: ['', Validators.required],
      gracePeriod: ['', Validators.required],
      billNoPrefix: ['', Validators.required],
      billStartNumber: ['', Validators.required],
      //  billNoSuffix: ['', Validators.required],
      //  startDate: ['', Validators.required],
      //  endDate: ['', Validators.required],
      billingHeadIdFk: ['', Validators.required],
      chooseDueDate: [null, Validators.nullValidator],

    });



  }
  get f() { return this.registerForm.controls; }


  newAdhocGenerateBill(): void {
    this.submitted = false;
    this.generate = new GenerateBill();


  }

  save() {
    
    this.generateService.createGenerateBill(this.generate)
      .subscribe(data => {
        this.router.navigate(['billing_heads/adhoc_generate_bill'])
        alert("Successfully Saved")}, error => alert("Unable to Save"));
    this.generate = new GenerateBill();

    console.log("bill for", this.generate.billFor);
  }


  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();

  }
  callFlatBlock(value) {
  
    if (value == "All") {
      this.isBlockTower = false;
      this.isExcludeFlat = true;
      this.isSingleMultiple = false;
      this.registerForm.get('singleMultipleFlat').clearValidators();
      this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
      this.registerForm.get('blockTower').clearValidators();
      this.registerForm.get('blockTower').updateValueAndValidity();
    }
    
    if (value == "Selected Tower") {
      debugger;
      this.data2.getDistinctBlockTower().subscribe( 
        data2 => this.occupancyBlock$ = data2
      );
      this.isBlockTower = true;
      this.isExcludeFlat = true;
      this.isSingleMultiple = false;
      this.registerForm.get('singleMultipleFlat').clearValidators();
      this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
    }
    
    if (value === "Single/Multiple Flat Selected") {

      this.isSingleMultiple = true;
      this.isBlockTower = false;
      this.isExcludeFlat = false;
      this.registerForm.get('blockTower').clearValidators();
      this.registerForm.get('excludeFlat').clearValidators();
      this.registerForm.get('excludeFlat').updateValueAndValidity();
      this.registerForm.get('blockTower').updateValueAndValidity();
    }
   
  }

  callDueDate(value) {
    if (value === 'Choose Date') {
      this.isChooseDueDate = true;
    }
    else if (value === '1 week') {
      this.isChooseDueDate = false;
    }
    else if (value === '10 Days') {
      this.isChooseDueDate = false;
    }
    else if (value === '15 Days') {
      this.isChooseDueDate = false;
    }
    else if (value === '20 Days') {
      this.isChooseDueDate = false;
    }

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
