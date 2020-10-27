import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVendorsListComponent } from './NewVendors/new-vendors-list/new-vendors-list.component';
import { AddNewVendorComponent } from './NewVendors/add-new-vendor/add-new-vendor.component';
import { GetVendorsDetailsComponent } from './NewVendors/get-vendors-details/get-vendors-details.component';
import { UpdateVendorsDetailsComponent } from './NewVendors/update-vendors-details/update-vendors-details.component';
import { ManageVendorsComponent } from './manageVendors/manage-vendors/manage-vendors.component';
import { AddVendorsBillsComponent } from './addVendorsBill/add-vendors-bills/add-vendors-bills.component';
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Vendors',
      status: true
    },
    children: [
      {
        path: 'new_vendors_list',
        component: NewVendorsListComponent,
        data: {
          breadcrumb: 'Vendors List',
          status: true
        },
      },
      {
        path: 'add_vendors',
        component: AddNewVendorComponent,
        data: {
          breadcrumb: 'Add Vendor',
          status: true
        },
      },
      {
        path: 'get_vendors_details/:vendorId',
        component: GetVendorsDetailsComponent,
        data: {
          breadcrumb: 'Vendor Details',
          status: true
        },
      },
      {
        path: 'update_vendors/:vendorId',
        component: UpdateVendorsDetailsComponent,
        data: {
          breadcrumb: 'Update Vendors',
          status: true
        },
      },
      {
        path: 'manage_vendors',
        component: ManageVendorsComponent,
        data: {
          breadcrumb: 'Manage Vendors',
          status: true
        },
      },
      {
        path: 'add_vendors_bill',
        component: AddVendorsBillsComponent,
        data: {
          breadcrumb: 'Add Vendors Bill',
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
export class VendorsRoutingModule { }
