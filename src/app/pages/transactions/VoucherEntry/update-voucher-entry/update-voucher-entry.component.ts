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
  selector: 'app-update-voucher-entry',
  templateUrl: './update-voucher-entry.component.html',
  styleUrls: ['./update-voucher-entry.component.css']
})
export class UpdateVoucherEntryComponent implements OnInit {
  usersForm$:Object;
  registerForm: FormGroup;
  cashLedgers$:Object;
  bankLedgers$: Object;
  voucherEntry$: Object;
  voucher: Voucher = new Voucher();

//	voucherEntry : Voucher = new Voucher();
	submitted = false;
 voucherTitle=["BANK PAYMENT","BANK RECIEPT","CASH PAYMENT","CASH RECIEPT","JOURNAL"]
particularTitle=["BANK","AXIS BANK","PDDC BANK"] 
isBankRecieptDebitor:boolean=false;
  isBankRecieptCreditor:boolean=false;
  isBankPaymentDebitor:boolean=true;
  isBankPaymentCreditor:boolean=true;
  isCashPaymentDebitor:boolean=false;
  isCashPaymentCreditor:boolean=false;
  isCashRecieptDebitor:boolean=false;
  isCashRecieptCreditor:boolean=false;
  isJournalDebitor:boolean=false;
  isJournalCreditor:boolean=false;
  isChequeNumber:boolean=true;
ledgerId:any;
  ledgerfilter:any;
  filteredUsersDetails: Ledgers[] = []
  ledgers$: Object;
 constructor(private route: ActivatedRoute,private data : VoucherEntryService,private formBuilder: FormBuilder,private router: Router, private usersService: UsersFormService,private vendorService: VendorsService,private data1: LedgersService) {
this.route.params.subscribe( params => this.voucherEntry$ = params.voucherId );
	 }
newVoucher(): void {
    this.submitted = false;
    this.voucher = new Voucher();
  }
 save() {
  debugger;
    this.data.updateVoucher(this.voucherEntry$,this.voucher)
      .subscribe(data => {
    this.router.navigate(['transaction/voucher_entry_list'])
    alert("Successfully updated")}, error => alert("Unable to update due to some technical error"));
   this.voucher = new Voucher();
   
  }
 

 ngOnInit() {

  
  this.data.getVoucherEntryById(this.voucherEntry$).subscribe(data =>{ console.log("****************8", data); 
  this.voucher = data;

  if( this.voucher.voucherType == 'CASH PAYMENT'){
    this.isChequeNumber = false;
   
  }
  else if( this.voucher.voucherType == 'CASH RECIEPT'){
    this.isChequeNumber = false;
   
  }
  if( this.voucher.chequeNumber == null){
    this.isChequeNumber = false;
  }
 

}, error =>{console.log("################", error);


  
  });
  this.data1.showAllLedgers().subscribe(
    data => this.ledgers$ = data 
  );
  this.data1.getAllCashLedgersOnly().subscribe(
    data =>this.cashLedgers$ = data 
    );
    this.data1.getAllBankLedgersOnly().subscribe(
      data => this.bankLedgers$ = data 
    );
    this.registerForm = this.formBuilder.group({
      voucherType: ['', Validators.required],
      creditor: ['', Validators.required],
      referenceNumber: [null, Validators.nullValidator],
      amount: ['', Validators.required],
      debitor: ['', Validators.required],
      chequeNumber: [null],
      narration: ['', Validators.required],
       date: ['', Validators.required]
      
    });
	
  }
   get f() { return this.registerForm.controls; }
  onChangeVoucherType(value) {

    if(value ==="BANK PAYMENT")
    {
      this.data1.getAllBankLedgersOnly().subscribe(
        data => this.bankLedgers$ = data 
      );
      this.isBankPaymentDebitor=true;
      this.isBankPaymentCreditor=true;
        this.isBankRecieptCreditor=false
        this.isBankRecieptDebitor=false
        this.isCashPaymentDebitor=false;
        this.isCashPaymentCreditor=false;
        this.isJournalDebitor=false;
      this.isJournalCreditor=false;
      this.isCashRecieptDebitor=false;
      this.isCashRecieptCreditor=false;
      this.isChequeNumber=true;
    }
    else if(value==="BANK RECIEPT")
      {
        this.data1.getAllBankLedgersOnly().subscribe(
          data => this.bankLedgers$ = data 
        );
        this.isBankRecieptCreditor=true
      this.isBankRecieptDebitor=true
      this.isBankPaymentDebitor=false;
      this.isBankPaymentCreditor=false;
      this.isCashPaymentDebitor=false;
     this.isCashPaymentCreditor=false;
     this.isJournalDebitor=false;
     this.isJournalCreditor=false;
     this.isCashRecieptDebitor=false;
     this.isCashRecieptCreditor=false;
     this.isChequeNumber=true;
    }
    else if(value==="CASH PAYMENT"){
      this.data1.getAllCashLedgersOnly().subscribe(
        data =>this.cashLedgers$ = data 
        );
        this.isCashPaymentDebitor=true;
      this.isCashPaymentCreditor=true;
      this.isBankRecieptCreditor=false
      this.isBankRecieptDebitor=false
      this.isBankPaymentDebitor=false;
      this.isBankPaymentCreditor=false;
      this.isCashRecieptDebitor=false;
     this.isCashRecieptCreditor=false;
     this.isJournalDebitor=false;
      this.isJournalCreditor=false;
      this.isChequeNumber=false;
    }
    else if(value==="CASH RECIEPT"){
  this.data1.showAllLedgers().subscribe(
    data =>this.ledgers$ = data 
    );
    this.isCashRecieptDebitor=true;
    this.isCashRecieptCreditor=true;
    this.isBankRecieptCreditor=false
    this.isBankRecieptDebitor=false
    this.isBankPaymentDebitor=false;
    this.isBankPaymentCreditor=false;
    this.isCashPaymentDebitor=false;
    this.isCashPaymentCreditor=false;
    this.isJournalDebitor=false;
    this.isJournalCreditor=false;
    this.isChequeNumber=false;
   }
    else if(value==="JOURNAL"){
      this.data1.showAllLedgers().subscribe(
        data =>this.ledgers$ = data 
        );
  
        this.isCashRecieptDebitor=false;
      this.isCashRecieptCreditor=false;
      this.isBankRecieptCreditor=false;
      this.isBankRecieptDebitor=false;
      this.isBankPaymentDebitor=false;
      this.isBankPaymentCreditor=false;
      this.isCashPaymentDebitor=false;
      this.isCashPaymentCreditor=false;
      this.isJournalDebitor=true;
      this.isJournalCreditor=true;
      this.isChequeNumber=true;
    }
    
  }
  
  onSubmit() {
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
