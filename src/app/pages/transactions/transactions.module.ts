import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { VoucherEntryListComponent } from './VoucherEntry/voucher-entry-list/voucher-entry-list.component';
import { CreateVoucherEntryComponent } from './VoucherEntry/create-voucher-entry/create-voucher-entry.component';
import { GetVoucherEntryDetailsComponent } from './VoucherEntry/get-voucher-entry-details/get-voucher-entry-details.component';
import { UpdateVoucherEntryComponent } from './VoucherEntry/update-voucher-entry/update-voucher-entry.component';

import { ChequeStatusUpdateListComponent } from './ChequeStatusUpdate/cheque-status-update-list/cheque-status-update-list.component';
import { BouncedClearedChequeComponent } from './ChequeStatusUpdate/bounced-cleared-cheque/bounced-cleared-cheque.component';


@NgModule({
  declarations: [VoucherEntryListComponent, CreateVoucherEntryComponent, GetVoucherEntryDetailsComponent, UpdateVoucherEntryComponent, ChequeStatusUpdateListComponent, BouncedClearedChequeComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,FormsModule, ReactiveFormsModule,DataTablesModule
  ]
})
export class TransactionsModule { }
