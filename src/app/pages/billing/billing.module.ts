import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModules } from '../../helpers/material-modules';

import { BillingRoutingModule } from './billing-routing.module';

import { BillingHeadComponent } from './BillingHead/billing-head/billing-head.component';
import { CreateBillingHeadComponent } from './BillingHead/create-billing-head/create-billing-head.component';
import { GetBillingHeadDetailsComponent } from './BillingHead/get-billing-head-details/get-billing-head-details.component';
import { UpdateBillingHeadComponent } from './BillingHead/update-billing-head/update-billing-head.component';

import { GenerateBillComponent } from './GenerateBill/generate-bill/generate-bill.component';
import { CreateBillComponent } from './GenerateBill/create-bill/create-bill.component';
import { GetGenerateBillDetailsComponent } from './GenerateBill/get-generate-bill-details/get-generate-bill-details.component';
import { UpdateBillComponent } from './GenerateBill/update-bill/update-bill.component';

import { AdhocGenerateBillComponent } from './AdhocGenerateBill/adhoc-generate-bill/adhoc-generate-bill.component';
import { GenerateAdhocBillComponent } from './AdhocGenerateBill/generate-adhoc-bill/generate-adhoc-bill.component';
import { GetAdhocBillDetailsComponent } from './AdhocGenerateBill/get-adhoc-bill-details/get-adhoc-bill-details.component';
import { UpdateAdhocBillComponent } from './AdhocGenerateBill/update-adhoc-bill/update-adhoc-bill.component';

import { PostBillsComponent } from './PostBills/post-bills/post-bills.component';
import { GetBillToBePostComponent } from './PostBills/get-bill-to-be-post/get-bill-to-be-post.component';
import { ShowPayBillsComponent } from './RecieptEntry/show-pay-bills/show-pay-bills.component';
import { PayBillPagesComponent } from './RecieptEntry/pay-bill-pages/pay-bill-pages.component';
import { CurrentOutStandingsComponent } from './CurrentOutstandings/current-out-standings/current-out-standings.component';
import { BillingNoteComponent } from './BillNote/billing-note/billing-note.component';
import { PayBillNewComponent } from './RecieptEntry/payBillNew/pay-bill-new/pay-bill-new.component';
import { BillRegisterComponent } from './BillRegister/bill-register/bill-register.component';


@NgModule({
  declarations: [BillingHeadComponent,
     CreateBillingHeadComponent, 
     GetBillingHeadDetailsComponent, 
     UpdateBillingHeadComponent,
      GenerateBillComponent,
       CreateBillComponent, 
       GetGenerateBillDetailsComponent, 
       UpdateBillComponent, 
       AdhocGenerateBillComponent, 
       GenerateAdhocBillComponent, 
       GetAdhocBillDetailsComponent, 
       UpdateAdhocBillComponent, PostBillsComponent, GetBillToBePostComponent, ShowPayBillsComponent, PayBillPagesComponent, CurrentOutStandingsComponent, BillingNoteComponent, PayBillNewComponent, BillRegisterComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules

  ]
})
export class BillingModule { }
