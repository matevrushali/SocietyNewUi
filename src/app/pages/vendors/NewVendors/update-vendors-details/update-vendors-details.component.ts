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
  selector: 'app-update-vendors-details',
  templateUrl: './update-vendors-details.component.html',
  styleUrls: ['./update-vendors-details.component.css']
})
export class UpdateVendorsDetailsComponent implements OnInit {

  vendors$: Vendors = new Vendors();
  
  vendorUpdate : Vendors = new Vendors();
  submitted= false;
  vendorAddress: VendorAddress=new VendorAddress();
  registerForm: FormGroup;
  State=["Maharashtra"]
  districtTitle=["Mumbai","Pune"]
  tehsilTitle=["Mumbai","Pune"]
  
    constructor(private route: ActivatedRoute, private data: VendorsService,private router: Router,private address:VendorAddressService,private formBuilder: FormBuilder) { 
     this.route.params.subscribe( params => this.vendors$ = params.vendorId );
     }
     newVendors(): void{
  this.submitted = false;
      this.vendorUpdate = new Vendors();	
  }
  save() {
      this.data.updateVendorById(this.vendors$,this.vendorUpdate)
        .subscribe(data => {
    this.router.navigate(['vendors/new_vendors_list'])
  alert("Successfully updated")}, error => alert("Unable to update due to some technical error"));
     this.vendorUpdate = new Vendors();
    }
  
    ngOnInit() {
  
      this.data.getVendorsById(this.vendors$).subscribe(
        data => this.vendorUpdate = data  
    );
    this.registerForm = this.formBuilder.group({
  
      lastName: ['', Validators.required] ,
      firstName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      email: ['', Validators.required],
       function: ['', Validators.required] ,
      // addressfk: ['', Validators.required] ,
      addressLine1: ['', Validators.required] ,
      addressLine2: ['', Validators.required] ,
      city: ['', Validators.required] ,
      area: ['', Validators.required] ,
      tehsil: ['', Validators.required], 
      district: ['', Validators.required], 
      state: ['', Validators.required] ,
      pinCode: ['', Validators.required], 
      panNumber: ['', Validators.required], 
      
      });
  
  
    console.log(  "Data" ,this.data);
    console.log( "Object vendors$", this.vendors$);
  console.log("Vendor Address Id",this.vendorUpdate.vendorId);
  console.log("Id",this.vendorUpdate.addressfk.vendorAddressId);
  console.log("Id",this.vendorUpdate.addressfk.addressLine1);
  console.log("Id",this.vendorUpdate.addressfk.addressLine2);
    }
    get f() { return this.registerForm.controls; }
  
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
  