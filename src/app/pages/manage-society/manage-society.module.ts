import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { MaterialModules } from '../../helpers/material-modules';

import { EditorModule } from "@tinymce/tinymce-angular";
import { ManageSocietyRoutingModule } from './manage-society-routing.module';

import { SocietyComponent } from '../manage-society/SocietyOperations/society/society.component';
import { AddSocietyDetailsComponent } from './SocietyOperations/add-society-details/add-society-details.component';
import { GetSocietyDetailsComponent } from './SocietyOperations/get-society-details/get-society-details.component';
import { UpdateSocietyComponent } from './SocietyOperations/update-society/update-society.component';

import { EscalationMatrixComponent } from './EscalationMatrixOperations/escalation-matrix/escalation-matrix.component';
import { GetEscalationMatrixDetailsComponent } from './EscalationMatrixOperations/get-escalation-matrix-details/get-escalation-matrix-details.component';
import { AddEscalationMatrixComponent } from './EscalationMatrixOperations/add-escalation-matrix/add-escalation-matrix.component';
import { UpdateEscalationMatrixComponent } from './EscalationMatrixOperations/update-escalation-matrix/update-escalation-matrix.component';

import { NoticeManagerComponent } from './NoticeManager/notice-manager/notice-manager.component';
import { GetNoticeManagerDetailsComponent } from './NoticeManager/get-notice-manager-details/get-notice-manager-details.component';
import { AddNoticeComponent } from './NoticeManager/add-notice/add-notice.component';
import { UpdateNoticeComponent } from './NoticeManager/update-notice/update-notice.component';

import { ResidentListComponent } from './ResidentManager/resident-list/resident-list.component';
import { CreateResidentComponent } from './ResidentManager/create-resident/create-resident.component';
import { GetResidentDetailsComponent } from './ResidentManager/get-resident-details/get-resident-details.component';
import { UpdateResidentDetailsComponent } from './ResidentManager/update-resident-details/update-resident-details.component';

import { UnitManagerComponent } from './UnitsManager/unit-manager/unit-manager.component';
import { CreateUnitDetailsComponent } from './UnitsManager/create-unit-details/create-unit-details.component';
import { GetUnitDetailsComponent } from './UnitsManager/get-unit-details/get-unit-details.component';
import { UpdateUnitDetailsComponent } from './UnitsManager/update-unit-details/update-unit-details.component';

import { StaffManagerComponent } from './StaffManager/staff-manager/staff-manager.component';
import { GetStaffDetailsComponent } from './StaffManager/get-staff-details/get-staff-details.component';
import { AddStaffDetailsComponent } from './StaffManager/add-staff-details/add-staff-details.component';
import { UpdateStaffDetailsComponent } from './StaffManager/update-staff-details/update-staff-details.component';
import { ChangeOwnershipPageComponent } from './changeOwnership/change-ownership-page/change-ownership-page.component';
import { ResidentStaffListComponent } from './residentSatffManager/resident-staff-list/resident-staff-list.component';
import { AddResidentStaffComponent } from './residentSatffManager/add-resident-staff/add-resident-staff.component';
import { TenantMovementComponent } from './tenant-movement/tenant-movement.component';
@NgModule({
  declarations: [SocietyComponent,
    EscalationMatrixComponent,
    AddSocietyDetailsComponent,
    GetSocietyDetailsComponent,
    UpdateSocietyComponent,
    GetEscalationMatrixDetailsComponent,
    AddEscalationMatrixComponent,
    UpdateEscalationMatrixComponent,
    NoticeManagerComponent,
    GetNoticeManagerDetailsComponent,
    AddNoticeComponent,
    UpdateNoticeComponent,
    ResidentListComponent,
    CreateResidentComponent,
    GetResidentDetailsComponent,
    UpdateResidentDetailsComponent,
    UnitManagerComponent,
    CreateUnitDetailsComponent,
    GetUnitDetailsComponent,
    UpdateUnitDetailsComponent,
    StaffManagerComponent,
    GetStaffDetailsComponent,
    AddStaffDetailsComponent,
    UpdateStaffDetailsComponent,
    ChangeOwnershipPageComponent,
    ResidentStaffListComponent,
    AddResidentStaffComponent,
    TenantMovementComponent
  ],
  imports: [
    CommonModule,
    ManageSocietyRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    NgMultiSelectDropDownModule,
    EditorModule
  ],schemas: [ NO_ERRORS_SCHEMA ],
  // providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class ManageSocietyModule { }
