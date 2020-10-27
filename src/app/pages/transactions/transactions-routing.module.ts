import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherEntryListComponent } from './VoucherEntry/voucher-entry-list/voucher-entry-list.component';
import { CreateVoucherEntryComponent } from './VoucherEntry/create-voucher-entry/create-voucher-entry.component';
import { GetVoucherEntryDetailsComponent } from './VoucherEntry/get-voucher-entry-details/get-voucher-entry-details.component';
import { UpdateVoucherEntryComponent } from './VoucherEntry/update-voucher-entry/update-voucher-entry.component';
import { ChequeStatusUpdateListComponent } from './ChequeStatusUpdate/cheque-status-update-list/cheque-status-update-list.component';
import { BouncedClearedChequeComponent } from './ChequeStatusUpdate/bounced-cleared-cheque/bounced-cleared-cheque.component';
const routes: Routes = [{
  path: '',
  data: {
    breadcrumb: 'Transactions',
    status: true
  },
  children: [
    {
      path: 'voucher_entry_list',
      component: VoucherEntryListComponent,
      data: {
        breadcrumb: 'Voucher Entry',
        status: true
      },
    },
    {
      path: 'create_voucher_entry',
      component: CreateVoucherEntryComponent,
      data: {
        breadcrumb: 'Add Voucher',
        status: true
      },
    },
    {
      path: 'get_voucher_entry_details/:voucherId',
      component: GetVoucherEntryDetailsComponent,
      data: {
        breadcrumb: 'Voucher Details',
        status: true
      },
    },
    {
      path: 'update_voucher_entry/:voucherId',
      component: UpdateVoucherEntryComponent,
      data: {
        breadcrumb: 'Update Voucher ',
        status: true
      },
    },
    {
      path: 'cheque_status_list',
      component: ChequeStatusUpdateListComponent,
      data: {
        breadcrumb: 'Update Cheque Status',
        status: true
      },
    },
    {
      path: 'bounced_cleared_cheque/:voucherId',
      component: BouncedClearedChequeComponent,
      data: {
        breadcrumb: 'Bounce/Clear Cheque',
        status: true
      },
    },
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
