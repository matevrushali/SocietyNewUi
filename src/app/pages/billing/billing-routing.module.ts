import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Billing',
      status: true
    },
    children: [
      {
        path: 'billing_heads_list',
        component: BillingHeadComponent
      },
      {
        path: 'create_billing_head',
        component: CreateBillingHeadComponent
      },
      {
        path: 'get_billing_heads_details/:billingHeadsId',
        component: GetBillingHeadDetailsComponent
      },
      {
        path: 'update_billing_heads/:billingHeadsId',
        component: UpdateBillingHeadComponent
      },
     
      {
        path: 'generate_bill',
        component: GenerateBillComponent
      },
      {
        path: 'create_bill',
        component: CreateBillComponent
      },
      {
        path: 'get_generate_bill_details/:generateBillsId',
        component: GetGenerateBillDetailsComponent
      },
      {
        path: 'update_bill/:generateBillsId',
        component: UpdateBillComponent
      },
      {
        path: 'adhoc_generate_bill',
        component: AdhocGenerateBillComponent
      },
      
      {
        path: 'generate_adhoc_bill',
        component: GenerateAdhocBillComponent
      },
      {
        path: 'get_adhoc_bill_details/:adhocGenerateBillId',
        component: GetAdhocBillDetailsComponent
      },
      {
        path: 'update_adhoc_bill/:adhocGenerateBillId',
        component: UpdateAdhocBillComponent
      },
      {
        path: 'post_bill_list',
        component: PostBillsComponent
      },
      {
        path: 'get_bill_to_be_post/:generateBillsId',
        component: GetBillToBePostComponent
      },
      {
        path: 'show_bills',
        component: ShowPayBillsComponent
      },
      {
        path: 'pay/:generateBillsId',
        component: PayBillPagesComponent
      },
      {
        path: 'payNew/:generateBillsId',
        component: PayBillNewComponent
      },

      {
        path: 'current_outstandings',
        component: CurrentOutStandingsComponent
      },
      {
        path: 'billing_note',
        component: BillingNoteComponent
      },
      {
        path: 'billing_register',
        component: BillRegisterComponent
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
