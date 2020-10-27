import { Component, OnInit } from '@angular/core';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { UsersFormService } from '../../../../services/users-form.service';
import { BillingHead } from '../../../../interfaces/billingHead';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { Router } from '@angular/router';
import { OccupancyService } from '../../../../services/occupancy.service';
import { Occupancy } from '../../../../interfaces/occupancy';

@Component({
  selector: 'app-show-pay-bills',
  templateUrl: './show-pay-bills.component.html',
  styleUrls: ['./show-pay-bills.component.css']
})
export class ShowPayBillsComponent implements OnInit {

  billing$: Object;
  myobject$: Object;
  billingType:BillingHead = new BillingHead(); 
  resident:Occupancy= new Occupancy();
 bill$:any;
 user$:any;
 unit$:any;
  voucherEntry$: Object;
  Entries$: Object;
  constructor(private data: BillingHeadService, private usersFormService: UsersFormService,private generateBillService:GenerateBillService,private router: Router,private unitService :OccupancyService) { }

  ngOnInit() {

    this.data.showAllBillingHead().subscribe(
      data => this.billing$ = data
    );

  
    this.usersFormService.getAllUsersFormDetails().subscribe(
     
      data => this.myobject$ = data
    );
    
  }
  callBills(value) {
    console.log(value);
this.unit$=value;

    this.unitService.getUnitDetailsAgainstBillHeadById(this.unit$).subscribe(
      data => this.Entries$ = data );
     

  }
  getResidentId(value){
    console.log(value);
  }
  filterContent(value:any,value2:any){
    debugger;
 console.log(value);
 console.log(value2);
 this.bill$=value
  this.user$=value2
 this.generateBillService.getRecieptEntryOfUser(this.bill$,this.user$).subscribe(
   data => this.voucherEntry$ = data );
  
  }
  rediectToPage(urlObj,otherVal){
   
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
    if(otherVal)
    {
      url.push(otherVal);
    }
      this.router.navigate(url);
    }}
  
}

