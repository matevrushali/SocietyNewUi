import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { OccupancyService } from '../../../../services/occupancy.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {

  generateBill$: GenerateBill = new GenerateBill();
  generateBill: GenerateBill = new GenerateBill();
  billingHead$: Object;
  occupancy$: Object;
  registerForm: FormGroup;
  submitted = false;
  BillType = ["Maintenance Bill"];
  DueDate = ["1 week", "10 Days", "15 Days", "20 Days", "Choose Date"];
  GracePeriod = ['1 Day', '2 Days', '3 Days', '4 Days', '5 Days']
  OwnershipTitle = ['1st Quarter Apr-Jun', '2nd Quarter Jul-Sep', '3rd Quarter Oct-Dec', '4th Quarter Jan-Mar'];
  yearTitle = ['2015', '2016', '2017', '2018', '2019', '2020']

  favoriteoption: string;
  isExcludeFlat: boolean = false;
  isBlockTower: boolean = false;
  isSingleMultiple: boolean = false;
  isBillType: boolean = false;
  isChooseDueDate: boolean = false;

  option: string[] = ["All", "Selected Tower", "Single/Multiple Flat Selected"];


  constructor(private route: ActivatedRoute, private data: GenerateBillService, private data2: OccupancyService, private data1: BillingHeadService, private router: Router, private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.generateBill$ = params.generateBillsId);
  }
  newGenerateBill(): void {
    this.submitted = false;
    this.generateBill = new GenerateBill();
  }
  save() {


    this.data.updateGenerateBillById(this.generateBill$, this.generateBill)
      .subscribe(data => {
        this.router.navigate(['billing_heads/generate_bill'])
        alert("Successfully Updated  Generate Bill")
      }, error => alert("Unable to update Generate Bill"));
    this.generateBill = new GenerateBill();


  }
  ngOnInit() {
    this.data.showGenerateBillById(this.generateBill$).subscribe(data => {
      console.log("****************8", data);
      this.generateBill = data;
      if (this.generateBill.billFor == 'All') {
        this.isExcludeFlat = true;
        this.isBlockTower = false;
        this.isSingleMultiple = false;
        this.registerForm.get('singleMultipleFlat').clearValidators();
        this.registerForm.get('singleMultipleFlat').updateValueAndValidity();
        this.registerForm.get('blockTower').clearValidators();
        this.registerForm.get('blockTower').updateValueAndValidity();


      }
      else if (this.generateBill.billFor == 'Selected Tower') {
        this.isBlockTower = true;
        this.isExcludeFlat = true;
        this.isSingleMultiple = false;
        this.registerForm.get('singleMultipleFlat').clearValidators();
        this.registerForm.get('singleMultipleFlat').updateValueAndValidity();

      }
      else if (this.generateBill.billFor == 'Single/Multiple Flat Selected') {
        this.isSingleMultiple = true;
        this.isBlockTower = false;
        this.isExcludeFlat = false;
        this.registerForm.get('blockTower').clearValidators();
        this.registerForm.get('excludeFlat').clearValidators();
        this.registerForm.get('excludeFlat').updateValueAndValidity();
        this.registerForm.get('blockTower').updateValueAndValidity();
      }


    }, error => {
      console.log("################", error);



    });
    this.data1.showAllBillingHead().subscribe(
      data1 => this.billingHead$ = data1
    );


    this.data2.getOccupancy().subscribe(
      data2 => this.occupancy$ = data2
    );

    //console.log(this.data);
    //console.log(this.generateBill$);
    this.registerForm = this.formBuilder.group({
      excludeFlat: [null],
      blockTower: [null],
      singleMultipleFlat: [null],
      //  	excludeFlat:[null,Validators.nullValidator],
      //    blockTower:[null,Validators.nullValidator],
      //    singleMultipleFlat:[null,Validators.nullValidator],
      //billType: ['', Validators.required],
      billPeriod: ['', Validators.required],
      date: [null, Validators.required],
      dueDate: [null, Validators.required],
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




  onSubmit() {

    debugger;
    // this.submitted = true;
    this.submitted = true;
    console.log("registration :" + this.registerForm);
    if (this.registerForm.invalid) {
      return;
    }
    if (this.generateBill.startDate > this.generateBill.endDate) {
      alert("Start Date is greater than End Date");
      return;
    }
    this.save();
  }
  callBillType(isBillType) {
    if (isBillType === "Maintainance Bill") {
      this.isBillType = true;
    }
    else {
      this.isBillType = true;
    }
  }
  callFlatBlock(option) {
    if (option === "All") {
      this.isExcludeFlat = true;
      this.isBlockTower = false;
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
