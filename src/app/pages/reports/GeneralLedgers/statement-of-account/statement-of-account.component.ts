import { Component, OnInit } from '@angular/core';
import { LedgersService } from '../../../../services/ledgers.service';
import { Ledgers } from '../../../../interfaces/ledgers';
import { ActivatedRoute,Router } from "@angular/router";
import { VoucherEntryService } from '../../../../services/voucher-entry.service';

@Component({
  selector: 'app-statement-of-account',
  templateUrl: './statement-of-account.component.html',
  styleUrls: ['./statement-of-account.component.css']
})
export class StatementOfAccountComponent implements OnInit {

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
