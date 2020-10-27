import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { Voucher } from '../../../../interfaces/voucher';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bounced-cleared-cheque',
  templateUrl: './bounced-cleared-cheque.component.html',
  styleUrls: ['./bounced-cleared-cheque.component.css']
})
export class BouncedClearedChequeComponent implements OnInit {
  voucherEntry$: Voucher = new Voucher();
  privilegesList: string;
  cheque: boolean = false;

  constructor(private voucherService: VoucherEntryService, private route: ActivatedRoute, private router: Router,) {
    this.route.params.subscribe(params => this.voucherEntry$ = params.voucherId);
  }

  ngOnInit() {

    this.voucherService.getVoucherEntryById(this.voucherEntry$).subscribe(
      data => {
        this.voucherEntry$ = data
        if (this.voucherEntry$.voucherType == "BANK PAYMENT" || this.voucherEntry$.voucherType == "BANK RECIEPT" || this.voucherEntry$.voucherType == "JOURNAL") {
          this.cheque = true;
        }
      }

    );

  }
  public updateChequeStatusToCleared(value) {
    this.voucherEntry$ = value;

    var confirmMsg = {
      title: "Are you sure want To Cleared Cheque?",
      text: "Once You Cleared Cheque, you will not be able to recover this entry!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }

    Swal.fire(confirmMsg)
      .then((willDelete) => {

        if (willDelete.value) {

          var resAlert = {
            title: "Success",
            text: "Updated the Cheque Status To CLEAR succcessfully",
            type: "success",
          }
          Swal.fire(resAlert).then((result) => {
            this.voucherService.updateChequeStatusToCleared(this.voucherEntry$).subscribe(data => {
              this.router.navigate(['transaction/cheque_status_list'])
              alert("Successfully update Cheque to Clear")
            }, error => alert("Unable to Update to Clear Cheque"));


          });
        } else {
          var resAlert = {
            title: "Warning",
            text: "You have canclled operation",
            type: "error",
          }
          Swal.fire(resAlert).then((result) => {
            this.router.navigate(['transaction/cheque_status_list'])
          });
        }

        console.log(willDelete)
      });



  }
  updateChequeStatusToBounced(value) {
    this.voucherEntry$ = value;

    var confirmMsg = {
      title: "Are you sure want To Cleared Cheque?",
      text: "Once You Cleared Cheque, you will not be able to recover this entry!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }

    Swal.fire(confirmMsg)
      .then((willDelete) => {

        if (willDelete.value) {

          var resAlert = {
            title: "Success",
            text: "Updated the Cheque Status To BOUNCED succcessfully",
            type: "success",
          }
          Swal.fire(resAlert).then((result) => {
            this.voucherService.updateChequeStatusToBounce(this.voucherEntry$).subscribe(data => {
              this.router.navigate(['transaction/cheque_status_list'])
              alert("Successfully update Cheque to Bounced")
            }, error => alert("Unable to Update to Bounce Cheque"));


          });
        } else {
          var resAlert = {
            title: "Warning",
            text: "You have canclled operation",
            type: "error",
          }
          Swal.fire(resAlert).then((result) => {
            this.router.navigate(['transaction/cheque_status_list'])
          });
        }

        console.log(willDelete)
      });

  }

}
