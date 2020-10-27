import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgersListComponent } from './Ledgers/ledgers-list/ledgers-list.component';
import { CreateLedgerComponent } from './Ledgers/create-ledger/create-ledger.component';
import { GetLedgerDetailsComponent } from './Ledgers/get-ledger-details/get-ledger-details.component';
import { UpdateLedgerComponent } from './Ledgers/update-ledger/update-ledger.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Master',
      status: true
    },
    children: [
      {
        path: 'ledgers_list',
        component: LedgersListComponent,
        data: {
          breadcrumb: ' Ledgers',
          status: true
        },
      },
      {
        path: 'create_ledgers',
        component: CreateLedgerComponent,
        data: {
          breadcrumb: 'Create Ledger',
          status: true
        },
      },
      {
        path: 'get_ledger_details/:ledgersId',
        component: GetLedgerDetailsComponent,
        data: {
          breadcrumb: 'Ledgers Details ',
          status: true
        },
      },
  {
        path: 'update_ledger/:ledgersId',
        component: UpdateLedgerComponent,
        data: {
          breadcrumb: 'Update Ledgers ',
          status: true
        },
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
