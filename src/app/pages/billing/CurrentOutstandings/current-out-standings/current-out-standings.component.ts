import { Component, OnInit } from '@angular/core';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { Subject } from 'rxjs/Subject';
import { BillingHead } from '../../../../interfaces/billingHead';
import { BillingHeadService } from '../../../../services/billing-head.service';
import { Occupancy } from '../../../../interfaces/occupancy';
import { OccupancyService } from '../../../../services/occupancy.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-current-out-standings',
  templateUrl: './current-out-standings.component.html',
  styleUrls: ['./current-out-standings.component.css']
})
export class CurrentOutStandingsComponent implements OnInit {
  dtOptions: any = {}
  dtTrigger = new Subject();
  billing$: Object;
  billingType:BillingHead = new BillingHead(); 
  userForm : Object;
  totalBillingAmount$: Object;
  totalRecievedAmount$:Object;
  totalPendingAmount$:Object;
  bill$:any;
  unit$:any;
  Entries$: Object;
  occupancy$: any;
  resident:Occupancy= new Occupancy();
  constructor(private router:Router,private generateBillService: GenerateBillService,private data: BillingHeadService,private occupancyService:OccupancyService) { }

  ngOnInit() {
  this.generateBillService.showAllGenarteBill().subscribe(
    data => this.Entries$ = data 
  );
  
  this.occupancyService.getOccupancy().subscribe(
    data => {
    this.occupancy$ = data
      this.dtTrigger.next();
    }
  );
  this.dtOptions = {
    dom: 'Bfrtip',
    buttons: ['copy', 'print', 'excel','csv','pdf']
  }
  this.generateBillService.getTotalBillingAmount().subscribe(
    data => this.totalBillingAmount$ = data 
  );
  this.generateBillService.getTotalRecievdAmount().subscribe(
    data => this.totalRecievedAmount$ = data 
  );
  this.generateBillService.getTotalPendingAmount().subscribe(
    data => this.totalPendingAmount$ = data 
  );
  this.data.showAllBillingHead().subscribe(
    data => this.billing$ = data
  );

  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  callBills(value){
   
    this.bill$=value;
    this.generateBillService.getBillsAgainstBillHeadById(this.bill$).subscribe(
      data => this.Entries$ = data );

      this.generateBillService.getTotalBillingAmountWRTBill(this.bill$).subscribe(
        data => this.totalBillingAmount$ = data 
       
      );
      
      this.generateBillService.getTotalRecievedAmountWRTBill(this.bill$).subscribe(
        data => this.totalRecievedAmount$ = data 
      );
      this.generateBillService.getTotalPendingAmountWRTBill(this.bill$).subscribe(
        data => this.totalPendingAmount$ = data 
      );
  }
  getResidentId(value){
this.unit$=value;
this.generateBillService.getBillsAgainstFlatsById(this.unit$).subscribe(
  data => this.Entries$ = data );

  this.generateBillService.getTotalBillingAmountWRTFlat(this.unit$).subscribe(
    data => this.totalBillingAmount$ = data 
   
  );
 this.generateBillService.getTotalRecievedAmountWRTFlat(this.unit$).subscribe(
  data => this.totalRecievedAmount$ = data 
  );
  this.generateBillService.getTotalPendingAmountWRTFlat(this.unit$).subscribe(
    data => this.totalPendingAmount$ = data 
    );
  }
  callBillsNew(value1,value2){
//console.log(value1,value2)
if(value1){
  this.bill$=value1;
  this.generateBillService.getBillsAgainstBillHeadById(this.bill$).subscribe(
    data => this.Entries$ = data );

    this.generateBillService.getTotalBillingAmountWRTBill(this.bill$).subscribe(
      data => this.totalBillingAmount$ = data 
     
    );
    
    this.generateBillService.getTotalRecievedAmountWRTBill(this.bill$).subscribe(
      data => this.totalRecievedAmount$ = data 
    );
    this.generateBillService.getTotalPendingAmountWRTBill(this.bill$).subscribe(
      data => this.totalPendingAmount$ = data 
    );
}
if(value2){
  this.unit$=value2;
  this.generateBillService.getBillsAgainstFlatsById(this.unit$).subscribe(
    data => this.Entries$ = data );
  
    this.generateBillService.getTotalBillingAmountWRTFlat(this.unit$).subscribe(
      data => this.totalBillingAmount$ = data 
     
    );
   this.generateBillService.getTotalRecievedAmountWRTFlat(this.unit$).subscribe(
    data => this.totalRecievedAmount$ = data 
    );
    this.generateBillService.getTotalPendingAmountWRTFlat(this.unit$).subscribe(
      data => this.totalPendingAmount$ = data 
      );
  
}
 if(value1 && value2){
  debugger
console.log("asdgff",value1,value2)
this.bill$=value1;
this.unit$=value2;
this.generateBillService.getBillingTotalAmountOfBillingHeadAndFlat(this.bill$,this.unit$).subscribe
  (data => {
    this.totalBillingAmount$ = data
   
  });
  // error => alert("No data available"));
  //this.router.navigate(['billing_heads/current_outstandings'])
//}
 // }
}
  }}