import { Component, OnInit } from '@angular/core';
import { LedgersService } from '../../../../services/ledgers.service';
import { Ledgers } from '../../../../interfaces/ledgers';
import { ActivatedRoute,Router } from "@angular/router";
import { VoucherEntryService } from '../../../../services/voucher-entry.service';

@Component({
  selector: 'app-statment-of-account-member-ledger',
  templateUrl: './statment-of-account-member-ledger.component.html',
  styleUrls: ['./statment-of-account-member-ledger.component.css']
})
export class StatmentOfAccountMemberLedgerComponent implements OnInit {

  ledgers$: Ledgers = new Ledgers();
  ledgers: Ledgers = new Ledgers();
  voucherEntry$: any;
  constructor(private route: ActivatedRoute,private data: LedgersService,private data1: VoucherEntryService) {
    this.route.params.subscribe( params => this.ledgers$ = params.ledgersId );
   }

  ngOnInit() {
    this.data.showLedgersById(this.ledgers$).subscribe(
      data =>{
     
      this.ledgers = data 
    }, error =>{
     
    }
    );
    debugger;
    this.voucherEntry$=this.ledgers$;
    this.data1.getAllStatementsOfAccountsById(this.voucherEntry$).subscribe(
      data => this.voucherEntry$ = data );
     
  }

}
