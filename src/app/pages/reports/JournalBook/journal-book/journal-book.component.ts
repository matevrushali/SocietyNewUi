import { Component, OnInit } from '@angular/core';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { Voucher } from '../../../../interfaces/voucher';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-journal-book',
  templateUrl: './journal-book.component.html',
  styleUrls: ['./journal-book.component.css']
})
export class JournalBookComponent implements OnInit {
  journalBook$: Object;
  pageActual:Number=1;
 
   constructor(private data: VoucherEntryService,private router:Router) { }
 
   ngOnInit() {
     this.data.getAllJournalBookEntry().subscribe(
       data => this. journalBook$ = data 
     );
   }
 
 }
 