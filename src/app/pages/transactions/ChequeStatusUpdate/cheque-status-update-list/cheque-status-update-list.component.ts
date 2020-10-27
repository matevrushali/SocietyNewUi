import { Component, OnInit } from '@angular/core';
import { LedgersService } from '../../../../services/ledgers.service';
import { Voucher } from '../../../../interfaces/voucher';
import { Ledgers } from '../../../../interfaces/ledgers';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute,Router } from "@angular/router";
@Component({
  selector: 'app-cheque-status-update-list',
  templateUrl: './cheque-status-update-list.component.html',
  styleUrls: ['./cheque-status-update-list.component.css']
})
export class ChequeStatusUpdateListComponent implements OnInit {
  ledgers$: Object;
  voucherEntry$: any;
  filteredUsersDetails: Ledgers[] = []
  usersForm: any;
  voucherId: any;
  userID: any;
 constructor(private data: LedgersService,private data1: VoucherEntryService,private route: ActivatedRoute,private router: Router, ) { 
    this.route.params.subscribe( params => this.voucherEntry$ = params.voucherId );
  }
  ledgers : Ledgers = new Ledgers();
  voucher:Voucher = new Voucher();
  ngOnInit() {
    this.data1.getAllLedgersWithPendingCheque().subscribe(
      data => this.ledgers$ = data 
    );

   
  }
  
  filterContent(value:any) {
  debugger;
    this.voucherEntry$=value
  
    this.data1.getVoucherLedgersChequeBounceById(this.voucherEntry$).subscribe(
      data => this.voucherEntry$ = data );
      console.log("Ledgers Id",value);
      console.log("Ledgers Id",this.data);
 console.log("voucherEntry$",this.voucherEntry$);



}
clearChequeStatus(getEntryToBeCleared){
  this.voucherEntry$=getEntryToBeCleared;

}
bounceCheque(getEntryToBebounce){
  this.voucherEntry$=getEntryToBebounce;

this.data1.updateChequeStatusToBounce(this.voucherEntry$).subscribe(data => alert("Bounced"), error => alert("Unable to Cleared"));
   console.log("in clearChequeStatus method",+getEntryToBebounce)

}
rediectToDetails(urlObj,otherVal){
   
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