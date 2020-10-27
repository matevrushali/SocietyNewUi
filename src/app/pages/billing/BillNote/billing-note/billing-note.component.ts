import { Component, OnInit } from '@angular/core';
import { BillingHead } from '../../../../interfaces/billingHead';
import { BillingHeadService } from '../../../../services/billing-head.service';

@Component({
  selector: 'app-billing-note',
  templateUrl: './billing-note.component.html',
  styleUrls: ['./billing-note.component.css']
})
export class BillingNoteComponent implements OnInit {
  billingHead$:Object;
  billing:BillingHead= new BillingHead();
  BillingHead=["Mainatainance Bill","Society Booking","Transfer Fees","Tenant admission Fees","Common Amenities Material uses charges","Fine for Water Wastage charges","Fine Charges"];
  BillPeriod=['1st Quarter Apr-Jun','2nd Quarter Jul-Sep','3rd Quarter Oct-Dec','4th Quarter Jan-Mar'];
  Months=["April","May","June","July","August","September","Octobers","November","December","January","February","March"]
  Year=['2015','2016','2017','2018','2019']
  isMonth: boolean = true;
  isMonthPeriod: boolean = true;

  constructor(private data:BillingHeadService) { }

  ngOnInit() {
    this.data.showAllBillingHead().subscribe(
      data => this.billingHead$ = data 
      );
      this.isMonth = false;
  this.isMonthPeriod=true;
  }
  onMonthChange(value){
    if (value === 'Mainatainance Bill') {
      this.isMonth = false;
      this.isMonthPeriod = true;
    }
    
    else if(value === 'Society Booking'){
      this.isMonth = true;
      this.isMonthPeriod = false;

    }
  }
}
