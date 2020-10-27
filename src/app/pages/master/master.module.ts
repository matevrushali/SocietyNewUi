import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterRoutingModule } from './master-routing.module';
import { LedgersListComponent } from './Ledgers/ledgers-list/ledgers-list.component';
import { CreateLedgerComponent } from './Ledgers/create-ledger/create-ledger.component';
import { GetLedgerDetailsComponent } from './Ledgers/get-ledger-details/get-ledger-details.component';
import { UpdateLedgerComponent } from './Ledgers/update-ledger/update-ledger.component';


@NgModule({
  declarations: [LedgersListComponent, CreateLedgerComponent, GetLedgerDetailsComponent, UpdateLedgerComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class MasterModule { }
