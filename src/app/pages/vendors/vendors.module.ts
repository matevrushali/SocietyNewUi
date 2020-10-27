import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VendorsRoutingModule } from './vendors-routing.module';

import { NewVendorsListComponent } from './NewVendors/new-vendors-list/new-vendors-list.component';
import { AddNewVendorComponent } from './NewVendors/add-new-vendor/add-new-vendor.component';
import { GetVendorsDetailsComponent } from './NewVendors/get-vendors-details/get-vendors-details.component';
import { UpdateVendorsDetailsComponent } from './NewVendors/update-vendors-details/update-vendors-details.component';
import { ManageVendorsComponent } from './manageVendors/manage-vendors/manage-vendors.component';
import { AddVendorsBillsComponent } from './addVendorsBill/add-vendors-bills/add-vendors-bills.component';


@NgModule({
  declarations: [NewVendorsListComponent, AddNewVendorComponent, GetVendorsDetailsComponent, UpdateVendorsDetailsComponent, ManageVendorsComponent, AddVendorsBillsComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    DataTablesModule,
    FormsModule, 
    ReactiveFormsModule 
    ]
})
export class VendorsModule { }
