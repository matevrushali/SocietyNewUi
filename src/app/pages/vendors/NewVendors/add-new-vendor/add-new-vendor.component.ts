import { Component, OnInit } from '@angular/core';
import { Vendors } from '../../../../interfaces/vendors';
import { VendorAddress } from '../../../../interfaces/vendorAddress';

import { VendorsService } from '../../../../services/vendors.service';
import { VendorAddressService } from '../../../../services/vendor-address.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-add-new-vendor',
  templateUrl: './add-new-vendor.component.html',
  styleUrls: ['./add-new-vendor.component.css']
})
export class AddNewVendorComponent implements OnInit {

  vendors: Vendors = new Vendors();
  submitted = false;
  vendors$: Object;
  firstName: string;
  vendorAddress$: Object;
  State = ["Maharashtra"]
  districtTitle = ["Mumbai", "Pune"]
  tehsilTitle = ["Mumbai", "Pune"]


  //username = new FormControl(); 
  registerForm: FormGroup;
  constructor(private info: VendorsService, private vendorsService: VendorsService, private data: VendorAddressService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      email: ['', Validators.required],
      function: ['', Validators.required],
      // addressfk: ['', Validators.required] ,
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      tehsil: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      panNumber: ['', Validators.required],

    });
  }
  get f() { return this.registerForm.controls; }

  newVendors(): void {
    this.submitted = false;
    this.vendors = new Vendors();
  }
  save() {

    this.vendorsService.createVendors(this.vendors)
      .subscribe(data => {
        this.router.navigate(['vendors/new_vendors_list'])
        alert("Successfully saved")
      }, error => alert("Unable to save due to some technical error"));
    this.vendors = new Vendors();
  }

  onSubmit() {


    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
  }
  rediectToListDetails(urlObj) {
  
    {
      var url = urlObj.split(',');
      if(url.length > 1)
      {
      var urlParam = parseInt(url[1]);
      if(Number.isNaN(urlParam) == true)
      {
        url[1] = eval(url[1]);
      }
      else
      {
        url[1] = urlParam;
      }
    }
      this.router.navigate(url);
    }
  }
}