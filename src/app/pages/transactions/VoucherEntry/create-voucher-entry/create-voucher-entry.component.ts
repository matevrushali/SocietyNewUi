import { Component, OnInit } from '@angular/core';
import { Voucher } from '../../../../interfaces/voucher';
import { LedgersService } from '../../../../services/ledgers.service';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorsService } from '../../../../services/vendors.service';
import { UsersFormService } from '../../../../services/users-form.service';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { Vendors } from '../../../../interfaces/vendors';
import { Ledgers } from "../../../../interfaces/ledgers";
// import { add } from 'ngx-bootstrap/chronos/public_api';
// import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-create-voucher-entry',
  templateUrl: './create-voucher-entry.component.html',
  styleUrls: ['./create-voucher-entry.component.css']
})
export class CreateVoucherEntryComponent implements OnInit {
  usersForm$: Object;
  cashLedgers$: Object;
  bankLedgers$: Object;
  ledgers$: Object;
  ledgersAll$: Object;
  usersFormDetails: UsersFormDetails = new UsersFormDetails();
  vendors: Vendors = new Vendors();
  vendors$: Object;
  voucher: Voucher = new Voucher();
  submitted = false;
  registerForm: FormGroup;
  voucherTitle = ["BANK PAYMENT", "BANK RECIEPT", "CASH PAYMENT", "CASH RECIEPT", "JOURNAL"]
  particularTitle = ["BANK", "AXIS BANK", "PDDC BANK"]
  isBankRecieptDebitor: boolean = false;
  isBankRecieptCreditor: boolean = false;
  isBankPaymentDebitor: boolean = true;
  isBankPaymentCreditor: boolean = true;
  isCashPaymentDebitor: boolean = false;
  isCashPaymentCreditor: boolean = false;
  isCashRecieptDebitor: boolean = false;
  isCashRecieptCreditor: boolean = false;
  isJournalDebitor: boolean = false;
  isJournalCreditor: boolean = false;
  isChequeNumber: boolean = true;
  ledgerId: any;
  ledgerfilter: any;
  filteredUsersDetails: Ledgers[] = []

  constructor(private data: LedgersService, private route: ActivatedRoute, private voucherService: VoucherEntryService, private usersService: UsersFormService, private formBuilder: FormBuilder, private router: Router, private vendorService: VendorsService, private cookieService: CookieService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      voucherType: ['', Validators.required],
      creditor: ['', Validators.required],
      referenceNumber: [null],
      amount: ['', Validators.required],
      debitor: ['', Validators.required],
      chequeNumber: [null],
      narration: ['', Validators.required],
      date: ['', Validators.required]


    });

    this.data.getAllUserAndVendorLedgers().subscribe(
      data => this.ledgers$ = data
    );
    // var merged$ = angular.merge(this.usersFormDetails, this.vendors);

    //console.log(merged$);
  }
  get f() { return this.registerForm.controls; }

  onChangeVoucherType(value) {

    if (value === "BANK PAYMENT") {
      this.data.getAllBankLedgersOnly().subscribe(
        data => this.bankLedgers$ = data
      );
      this.isBankPaymentDebitor = true;
      this.isBankPaymentCreditor = true;
      this.isBankRecieptCreditor = false
      this.isBankRecieptDebitor = false
      this.isCashPaymentDebitor = false;
      this.isCashPaymentCreditor = false;
      this.isJournalDebitor = false;
      this.isJournalCreditor = false;
      this.isCashRecieptDebitor = false;
      this.isCashRecieptCreditor = false;
      this.isChequeNumber = true;
    }
    else if (value === "BANK RECIEPT") {
      this.data.getAllBankLedgersOnly().subscribe(
        data => this.bankLedgers$ = data
      );
      this.isBankRecieptCreditor = true
      this.isBankRecieptDebitor = true
      this.isBankPaymentDebitor = false;
      this.isBankPaymentCreditor = false;
      this.isCashPaymentDebitor = false;
      this.isCashPaymentCreditor = false;
      this.isJournalDebitor = false;
      this.isJournalCreditor = false;
      this.isCashRecieptDebitor = false;
      this.isCashRecieptCreditor = false;
      this.isChequeNumber = true;
    }
    else if (value === "CASH PAYMENT") {
      this.data.getAllCashLedgersOnly().subscribe(
        data => this.cashLedgers$ = data
      );
      this.isCashPaymentDebitor = true;
      this.isCashPaymentCreditor = true;
      this.isBankRecieptCreditor = false
      this.isBankRecieptDebitor = false
      this.isBankPaymentDebitor = false;
      this.isBankPaymentCreditor = false;
      this.isCashRecieptDebitor = false;
      this.isCashRecieptCreditor = false;
      this.isJournalDebitor = false;
      this.isJournalCreditor = false;
      this.isChequeNumber = false;
      // this.registerForm.get('chequeNumber').clearValidators();
      // this.registerForm.get('chequeNumber').updateValueAndValidity();

    }
    else if (value === "CASH RECIEPT") {
      this.data.getAllCashLedgersOnly().subscribe(
        data => this.cashLedgers$ = data
      );
      this.isCashRecieptDebitor = true;
      this.isCashRecieptCreditor = true;
      this.isBankRecieptCreditor = false
      this.isBankRecieptDebitor = false
      this.isBankPaymentDebitor = false;
      this.isBankPaymentCreditor = false;
      this.isCashPaymentDebitor = false;
      this.isCashPaymentCreditor = false;
      this.isJournalDebitor = false;
      this.isJournalCreditor = false;
      this.isChequeNumber = false;
    }
    else if (value === "JOURNAL") {
      this.data.showAllLedgers().subscribe(
        data => this.ledgersAll$ = data
      );

      this.isCashRecieptDebitor = false;
      this.isCashRecieptCreditor = false;
      this.isBankRecieptCreditor = false;
      this.isBankRecieptDebitor = false;
      this.isBankPaymentDebitor = false;
      this.isBankPaymentCreditor = false;
      this.isCashPaymentDebitor = false;
      this.isCashPaymentCreditor = false;
      this.isJournalDebitor = true;
      this.isJournalCreditor = true;
      this.isChequeNumber = true;
    }

  }

  newVoucher(): void {
    this.submitted = false;
    this.voucher = new Voucher();
  }


  save() {


    this.voucherService.createVoucher(this.voucher)
      .subscribe(data => {
        this.router.navigate(['transaction/voucher_entry_list'])
        alert("Successfully saved")
      }, error => alert("Unable to save due to some technical error"));
    this.voucher = new Voucher();
  }

  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.save();
  }
  rediectToList(urlObj) {
  
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
