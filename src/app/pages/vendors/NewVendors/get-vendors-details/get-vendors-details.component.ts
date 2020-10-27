import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../../services/vendors.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Vendors } from '../../../../interfaces/vendors';
import { VendorAddress } from '../../../../interfaces/vendorAddress';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-get-vendors-details',
  templateUrl: './get-vendors-details.component.html',
  styleUrls: ['./get-vendors-details.component.css']
})
export class GetVendorsDetailsComponent implements OnInit {
  vendorsDetails: Object;
  privilegesList: string;
  vendors$: Vendors = new Vendors();
  vendor: Vendors = new Vendors();
  constructor(private route: ActivatedRoute, private vendorsService: VendorsService, private router: Router, private cookieService: CookieService) {
    this.route.params.subscribe(params => this.vendors$ = params.vendorId);
  }
  ngOnInit() {
    this.vendorsService.getVendorsById(this.vendors$).subscribe(
      data => {
        console.log("****************8", data);
        this.vendor = data;
        //this.usersFormDetails.unitDetailsIdFk = data.unitDetailsIdFk;
      }, error => {
        console.log("################", error);
      }
    );
    //console.log(this.data);
    console.log(this.vendor);
    console.log(this.vendor.addressfk.vendorAddressId);
  }
  myFunction() {
    this.router.navigate(['vendors'])
  }
  showUpdateButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("updateVendorsById")) {
      return true;
    }
    else {
      return false;
    }
  }

  showDeleteButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("deleteVendorsById")) {
      return true;
    }
    else {
      return false;
    }
  }
  rediectToUpdate(urlObj, otherVal) {

    {
      var url = urlObj.split(',');
      if (url.length > 1) {
        var urlParam = parseInt(url[1]);
        if (Number.isNaN(urlParam) == true) {
          url[1] = eval(url[1]);
        }
        else {
          url[1] = urlParam;
        }
      }
      if (otherVal) {
        url.push(otherVal);
      }
      this.router.navigate(url);
    }
  }
  callSweetAlert(value) {
    this.vendors$ = value;

    var confirmMsg = {
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this entry!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }

    Swal.fire(confirmMsg)
      .then((willDelete) => {

        if (willDelete.value) {

          var resAlert = {
            title: "Success",
            text: "Deleted succcessfully",
            type: "success",
          }
          Swal.fire(resAlert).then((result) => {
            this.vendorsService.deleteVendor(this.vendors$).subscribe(data => {
              this.router.navigate(['vendors/new_vendors_list'])
              alert("Deleted")
            }, error => alert("Unable to Deleted"));


          });
        } else {
          var resAlert = {
            title: "Warning",
            text: "You have canclled operation",
            type: "error",
          }
          Swal.fire(resAlert).then((result) => {
            this.router.navigate(['vendors/new_vendors_list'])
          });
        }

        console.log(willDelete)
      });


  }
  rediectToListDetails(urlObj) {

    {
      var url = urlObj.split(',');
      if (url.length > 1) {
        var urlParam = parseInt(url[1]);
        if (Number.isNaN(urlParam) == true) {
          url[1] = eval(url[1]);
        }
        else {
          url[1] = urlParam;
        }
      }
      this.router.navigate(url);
    }
  }
}

