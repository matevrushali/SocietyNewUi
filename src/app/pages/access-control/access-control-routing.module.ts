import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsExecutiveComponent } from './accounts-executive/accounts-executive.component';
import { AccountsManagerComponent } from './accounts-manager/accounts-manager.component';
import { AuditorComponent } from './auditor/auditor.component';
import { FacilityManagerComponent } from './facility-manager/facility-manager.component';
import { HelpdeskExecutiveComponent } from './helpdesk-executive/helpdesk-executive.component';
import { TestFormsComponent } from './test/test-forms/test-forms.component';
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Access Control',
      status: false
    },
    children: [
      {
        path: 'account_executive',
        component: AccountsExecutiveComponent,
        data: {
          breadcrumb: 'Acount Excecutive',
          status: false
        },
      }, 
      {
        path: 'account_manager',
        component: AccountsManagerComponent
      }, 
      {
        path: 'auditor',
        component: AuditorComponent
      }, 
      {
        path: 'facility_manager',
        component: FacilityManagerComponent
      }, 
      {
        path: 'helpdesk_executive',
        component: HelpdeskExecutiveComponent
      }, 
      //import {  } from './test/test-forms/test-forms.component';
      {
        path: 'test',
        component: TestFormsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessControlRoutingModule { }
