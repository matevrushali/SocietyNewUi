import { Component, OnInit } from '@angular/core';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { BillingHead } from '../../../../interfaces/billingHead';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bill-register',
  templateUrl: './bill-register.component.html',
  styleUrls: ['./bill-register.component.css']
})
export class BillRegisterComponent implements OnInit {
  billing$: Object;
  billingType:BillingHead = new BillingHead(); 
  billingHead$  :BillingHead = new BillingHead();
  yearTitle = ['2015', '2016', '2017', '2018', '2019', '2020']
  monthTitle=['April', 'May', 'June', 'July', 'August', 'Sept','Oct','Nov','Dec','Jan','Feb','Mar'];
  isquarter: boolean = false;
  quarterTitle=['1st Quarter Apr-Jun', '2nd Quarter Jul-Sep', '3rd Quarter Oct-Dec', '4th Quarter Jan-Mar'];
  constructor(private data: BillingHeadService,private route: ActivatedRoute) { this.route.params.subscribe( params => this.billingHead$ = params.billingHeadsId );}

  ngOnInit(): void {
    this.data.showAllBillingHead().subscribe(
      data => this.billing$ = data
    );

  }
  callBills(value){
    debugger;
console.log(value);
this.billingHead$=value;
this.data.showBillingHeadById(this.billingHead$ ).subscribe(
  data => this.billingType = data 
    );
    if(this.billingType.billName=="Maintenance Bill") {
this.isquarter=true;
    }
  else{
    this.isquarter=false;
  }
  }
}
