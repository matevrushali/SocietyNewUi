import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Society',
      status: true
    },
    children: [
      {
        path: 'manage_society',
        component: SocietyComponent,
        data: {
          breadcrumb: 'Manage Society',
          status: true
        },
      },
      {
        path: 'addSociety',
        component: AddSocietyDetailsComponent,
        data: {
          breadcrumb: 'Add Society',
          status: true
        },
      },
      {
        path: 'get_society_details/:societyId',
        component: GetSocietyDetailsComponent,
        data: {
          breadcrumb: 'Society Details',
          status: true
        },
      },
      {
        path: 'update_society_details/:societyId',
        component: UpdateSocietyComponent,
        data: {
          breadcrumb: 'Update Society Details',
          status: true
        },
      },
      {
        path: 'escalation_matrix',
        component: EscalationMatrixComponent,
        data: {
          breadcrumb: 'Escalation Matrix',
          status: true
        },
      },
      {
        path: 'get_escalation_matrix_details/:escalationMatixId',
        component: GetEscalationMatrixDetailsComponent,
        data: {
          breadcrumb: 'Escalation Matrix Details',
          status: true
        },
      },
      {
        path: 'add_escalation_matrix',
        component: AddEscalationMatrixComponent,
        data: {
          breadcrumb: 'Add Escalation Matrix',
          status: true
        },
      },
      {
        path: 'update_escalation_matrix/:escalationMatixId',
        component: UpdateEscalationMatrixComponent,
        data: {
          breadcrumb: 'Update Escalation Matrix',
          status: true
        },
      },
      
      {
        path: 'notice_manager',
        component: NoticeManagerComponent,
        data: {
          breadcrumb: 'Notice Manager',
          status: true
        },
      },
      {
        path: 'get_notice_manager_details/:noticeManagerId',
        component: GetNoticeManagerDetailsComponent,
        data: {
          breadcrumb: 'Notice Manager Details',
          status: true
        },
      },
      {
        path: 'add_notice_manager',
        component: AddNoticeComponent,
        data: {
          breadcrumb: 'Add Notice',
          status: true
        },
      },
      {
        path: 'update_notice_manager/:noticeManagerId',
        component: UpdateNoticeComponent,
        data: {
          breadcrumb: 'Update Notice Details',
          status: true
        },
      },
      {
        path: 'resident_manager',
        component: ResidentListComponent,
        data: {
          breadcrumb: 'Residents Manager',
          status: true
        },
      },
      {
        path: 'create_resident_manager',
        component: CreateResidentComponent,
        data: {
          breadcrumb: 'Add Resident ',
          status: true
        },
      },
      {
        path: 'get_resident_details/:usersFormId',
        component: GetResidentDetailsComponent,
        data: {
          breadcrumb: 'Resident Manager Details',
          status: true
        },
      },
      {
        path: 'update_resident_manager/:usersFormId',
        component: UpdateResidentDetailsComponent,
        data: {
          breadcrumb: 'Update Resident',
          status: true
        },
      },
    
      {
        path: 'unit_manager',
        component: UnitManagerComponent,
        data: {
          breadcrumb: 'Unit Manager',
          status: true
        },
      },
      {
        path: 'create_unit_manager',
        component: CreateUnitDetailsComponent,
        data: {
          breadcrumb: 'Add Unit',
          status: true
        },
      },
      {
        path: 'get_unit_details/:occupancyDetailsId',
        component: GetUnitDetailsComponent,
        data: {
          breadcrumb: ' Unit Details',
          status: true
        },
      },
      {
        path: 'update_unit_manager/:occupancyDetailsId',
        component: UpdateUnitDetailsComponent,
        data: {
          breadcrumb: 'Update Unit Details',
          status: true
        },
      },
      
      //.....................
      {
        path: 'staff_manager',
        component: StaffManagerComponent,
        data: {
          breadcrumb: 'Staff Manager',
          status: true
        },
      },
      {
        path: 'add_staff_manager',
        component: AddStaffDetailsComponent,
        data: {
          breadcrumb: 'Add Staff',
          status: true
        },
      },
      {
        path: 'get_staff_details/:staffManagerId',
        component: GetStaffDetailsComponent,
        data: {
          breadcrumb: 'Staff Details',
          status: true
        },
      },
      {
        path: 'update_staff_manager/:staffManagerId',
        component: UpdateStaffDetailsComponent,
        data: {
          breadcrumb: 'Update Staff Details',
          status: true
        },
      },
      {
        path: 'changeOwnership',
        component: ChangeOwnershipPageComponent,
        data: {
          breadcrumb: 'Change Ownership',
          status: true
        },
      },
   
   {
    path: 'resident_staff_list',
    component: ResidentStaffListComponent,
    data: {
      breadcrumb: 'Resident Staff Manager',
      status: true
    },
  }, 
  {
    path: 'add_resident_staff',
    component: AddResidentStaffComponent,
    data: {
      breadcrumb: 'Add Resident Staff ',
      status: true
    },
    //import {  } from './tenant-movement/tenant-movement.component';
  },  
  
  {
    path: 'tenant_movement',
    component: TenantMovementComponent,
    data: {
      breadcrumb: 'Tenant Movement',
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
export class ManageSocietyRoutingModule { }
