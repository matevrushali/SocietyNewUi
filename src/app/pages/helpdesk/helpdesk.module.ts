import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateHelpdeskComponent } from './create-helpdesk/create-helpdesk.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GetHelpdeskComponent } from './get-helpdesk/get-helpdesk.component';

@NgModule({
  declarations: [HelpdeskComponent, CreateHelpdeskComponent, GetHelpdeskComponent],
  imports: [
    CommonModule,
    HelpdeskRoutingModule,
    DataTablesModule.forRoot(),
    FormsModule,ReactiveFormsModule
  ]
})
export class HelpdeskModule { }
