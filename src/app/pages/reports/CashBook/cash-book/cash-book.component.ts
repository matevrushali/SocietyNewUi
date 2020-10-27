import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';

@Component({
  selector: 'app-cash-book',
  templateUrl: './cash-book.component.html',
  styleUrls: ['./cash-book.component.css']
})
export class CashBookComponent implements OnInit {
  cashBook$:Object;
  cashAmount$: Object;
 pageActual:Number=1;
 combine :Object;
   constructor(private data: VoucherEntryService,private router:Router) { }
 
   ngOnInit() {
     this.data.getAllCashBookEntry().subscribe(
       data => this.cashBook$ = data 
     );
     this.data.getCashRecieptAmount().subscribe(
       data => this.cashAmount$ = data 
     );
 
     this.combine={...this.cashBook$,...this.cashAmount$}
     console.log("combine : "+this.combine)
   }
 }
