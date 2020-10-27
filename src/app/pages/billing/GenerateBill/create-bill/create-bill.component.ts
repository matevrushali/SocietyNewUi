import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  generate: GenerateBill = new GenerateBill();
  billingHead$: object;
  occupancy$: Object;
  submitted = false;
  registerForm: FormGroup;

  BillType = ["Maintenance Bill"];
  DueDate = ["1 week", "10 Days", "15 Days", "20 Days", "Choose Date"];
  GracePeriod = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days'];
  OwnershipTitle = ['1st Quarter Apr-Jun', '2nd Quarter Jul-Sep', '3rd Quarter Oct-Dec', '4th Quarter Jan-Mar'];
  yearTitle = ['2015', '2016', '2017', '2018', '2019', '2020']

  favoriteoption: string;
  isExcludeFlat: boolean = false;
  isBlockTower: boolean = false;
  isSingleMultiple: boolean = false;
  isBillType: boolean = false;
  isChooseDueDate: boolean = false;

  option: string[] = ["All", "Selected Tower", "Single/Multiple Flat Selected"];
  constructor(private generateBillService: GenerateBillService, private data: BillingHeadService, private data2: OccupancyService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generate.isAdhoc = false;
    this.data.showAllRecurringBillingHead().subscribe(
      data => this.billingHead$ = data
    );
    this.data2.getOccupancy().subscribe(
      data2 => this.occupancy$ = data2
    );
    this.registerForm = this.formBuilder.group({
      excludeFlat: [null],
      blockTower: [null],
      singleMultipleFlat: [null],
      billPeriod: ['', Validators.required],
      date: ['', Validators.required],
      dueDate: ['', Validators.required],
      gracePeriod: ['', Validators.required],
      billNoPrefix: ['', Validators.required],
      billStartNumber: ['', Validators.required],
      billNoSuffix: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      billingHeadIdFk: ['', Validators.required],
      chooseDueDate: [null, Validators.nullValidator],
      year: [null],

    });

  }
  get f() { return this.registerForm.controls; }

  newGenerateBill(): void {
    this.submitted = false;
    this.generate = new GenerateBill();
  }
  save() {
    this.generateBillService.createGenerateBill(this.generate)

      .subscribe(data => {
        this.router.navigate(['billing_heads/generate_bill'])
        alert("Generate Bill details successfully Saved")
      }, error => alert("Unable to Save generate bill details."));

    this.generate = new GenerateBill();


  }

  onSubmit() {


    this.submitted = true;
    debugger;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.generate.startDate > this.generate.endDate) {
      alert('Start date is greater than End date.');
      return;
    }
    this.save();

  }
  callBillType(value) {
    if (value === 'Maintenance Bill') {
      this.isBillType = true;
    }
    else {
      this.isBillType = true;
    }


  }
//   method1(value){
// console.log(value);
//   }
  callFlatBlock(option) {
    if (option === "All") {
      this.isBlockTower = false;
      this.isExcludeFlat = true;
      this.isSingleMultiple = false;
      this.registerForm.get('singleMultipleFlat').clearValidators();
      this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
      this.registerForm.get('blockTower').clearValidators();
      this.registerForm.get('blockTower').updateValueAndValidity();
    }
    else if (option === "Selected Tower") {

      this.isBlockTower = true;
      this.isExcludeFlat = true;
      this.isSingleMultiple = false;
      this.registerForm.get('singleMultipleFlat').clearValidators();
      this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
    }
    else if (option === "Single/Multiple Flat Selected") {

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