import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashBookComponent } from './CashBook/cash-book/cash-book.component';
import { BankBookComponent } from './BankBook/bank-book/bank-book.component';
import { JournalBookComponent } from './JournalBook/journal-book/journal-book.component';
import { GeneralLedgersComponent } from './GeneralLedgers/general-ledgers/general-ledgers.component';
import { StatementOfAccountComponent } from './GeneralLedgers/statement-of-account/statement-of-account.component';

import { MemberLedgersListComponent } from './MemberLedgers/member-ledgers-list/member-ledgers-list.component';
import { StatmentOfAccountMemberLedgerComponent } from './MemberLedgers/statment-of-account-member-ledger/statment-of-account-member-ledger.component';
import { TrialBalanceSheetComponent } from './TrialBalance/trial-balance-sheet/trial-balance-sheet.component';
import { ProfitLossAccountComponent } from './ProfitLossAccount/profit-loss-account/profit-loss-account.component';
import { BalanceSheetDetailsComponent } from './BalanceSheet/balance-sheet-details/balance-sheet-details.component';
const routes: Routes = [{
  path: '',
  data: {
    breadcrumb: 'Reports',
    status: true
  },
  children: [
    {
      path: 'cash_book',
      component: CashBookComponent,
      data: {
        breadcrumb: 'Cash Book ',
        status: true
      },
    },
    {
      path: 'bank_book',
      component: BankBookComponent,
      data: {
        breadcrumb: 'Bank Book',
        status: true
      },
    }, 
    {
      path: 'journal_book',
      component: JournalBookComponent,
      data: {
        breadcrumb: 'Journal Book',
        status: true
      },
    },
    {
      path: 'general_ledgers',
      component: GeneralLedgersComponent,
      data: {
        breadcrumb: 'General Ledgers',
        status: true
      },
    },
    {
      path: 'statment_of_account_ledgers/:ledgersId',
      component: StatementOfAccountComponent,
      data: {
        breadcrumb: 'Statement Of Account Ledgers',
        status: true
      },
    },
    {
      path: 'member_ledgers',
      component: MemberLedgersListComponent,
      data: {
        breadcrumb: 'Member Ledgers ',
        status: true
      },
    },
    {
      path: 'statment_of_account_members_ledgers/:ledgersId',
      component: StatmentOfAccountMemberLedgerComponent,
      data: {
        breadcrumb: 'Statement Of Account Ledgers Details ',
        status: true
      },
    },
   
    {
      path: 'trial_balance',
      component: TrialBalanceSheetComponent,
      data: {
        breadcrumb: 'Trial Balance Sheet ',
        status: true
      },
    },
    {
      path: 'profit_loss_account',
      component: ProfitLossAccountComponent,
      data: {
        breadcrumb: 'Profit Loss Sheet',
        status: true
      },
    },
    {
      path: 'balance_sheet',
      component: BalanceSheetDetailsComponent,
      data: {
        breadcrumb: 'Balance Sheet ',
        status: true
      },
    },
    //import { BalanceSheetDetailsComponent } from './BalanceSheet/balance-sheet-details/balance-sheet-details.component';
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
