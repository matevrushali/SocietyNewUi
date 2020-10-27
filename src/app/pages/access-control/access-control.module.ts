import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { FacilityManagerComponent } from './facility-manager/facility-manager.component';
import { AccountsManagerComponent } from './accounts-manager/accounts-manager.component';
import { AccountsExecutiveComponent } from './accounts-executive/accounts-executive.component';
import { HelpdeskExecutiveComponent } from './helpdesk-executive/helpdesk-executive.component';
import { AuditorComponent } from './auditor/auditor.component';
import { TestFormsComponent } from './test/test-forms/test-forms.component';


@NgModule({
  declarations: [FacilityManagerComponent, AccountsManagerComponent, AccountsExecutiveComponent, HelpdeskExecutiveComponent, AuditorComponent, TestFormsComponent],
  imports: [
    CommonModule,
    AccessControlRoutingModule
  ]
})
export class AccessControlModule { }
