import { Component, OnInit } from '@angular/core';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { Voucher } from '../../../../interfaces/voucher';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { Ledgers } from '../../../../interfaces/ledgers';
import { LedgersService } from '../../../../services/ledgers.service';

@Component({
  selector: 'app-bank-book',
  templateUrl: './bank-book.component.html',
  styleUrls: ['./bank-book.component.css']
})
export class BankBookComponent implements OnInit {

  ledger$:Object;
 user$: Ledgers= new Ledgers();
 userID: any;
 bankAmount$: Object;
 bankBook$: Object;
 pageActual:Number=1;
  constructor(private data: VoucherEntryService,private router:Router,private data1:LedgersService) { }

  ngOnInit() {
    this.data.getAllBankBookEntry().subscribe(
      data => this. bankBook$ = data 
    );
    this.data.getBankRecieptAmount().subscribe(
      data => this.bankAmount$ = data 
    );
    

  }


}
