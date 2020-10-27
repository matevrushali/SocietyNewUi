import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { ReportsRoutingModule } from './reports-routing.module';
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

@NgModule({
  declarations: [CashBookComponent, BankBookComponent, JournalBookComponent, GeneralLedgersComponent, StatementOfAccountComponent, MemberLedgersListComponent, StatmentOfAccountMemberLedgerComponent, TrialBalanceSheetComponent, ProfitLossAccountComponent, BalanceSheetDetailsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class ReportsModule { }
