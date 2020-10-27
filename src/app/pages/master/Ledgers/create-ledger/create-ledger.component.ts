import { Component, OnInit } from '@angular/core';
import { Ledgers } from '../../../../interfaces/ledgers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LedgersService } from '../../../../services/ledgers.service';
import { GroupService } from '../../../../services/group.service';

@Component({
  selector: 'app-create-ledger',
  templateUrl: './create-ledger.component.html',
  styleUrls: ['./create-ledger.component.css']
})
export class CreateLedgerComponent implements OnInit {
  ledgers: Ledgers = new Ledgers();
  submitted = false;  
  registerForm: FormGroup;  
  group$: Object;
  typeTitle=["Credit","Debit"]
  ledgerTitle=["Residential Ledger","Vendor Ledger","Bank Ledger","Cash Ledger"]
    constructor(private ledgersService : LedgersService,private router: Router,private data1:GroupService,private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.data1.showAllGroup().subscribe(
        data1 => this.group$ = data1 
        
      );
      this.registerForm = this.formBuilder.group({
        accountName: ['', Validators.required],
        amountType: ['', Validators.required],
        openingBalance: ['', Validators.required],
         groupIdFk: ['', Validators.required],
         ledgerType: ['', Validators.required]
    });
      }
      
      get f() { return this.registerForm.controls; }
    
  
  newLedgers(): void {
      this.submitted = false;
      this.ledgers = new Ledgers();
     
    }
    
    save() {
      this.ledgersService.createLedgers(this.ledgers)
        .subscribe(data => {
      this.router.navigate(['ledgers/ledgers_list'])
      alert("Successfully Saved")}, error => alert("Unable to Save"));
      this.ledgers = new Ledgers();
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
  