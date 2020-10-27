import { Component, OnInit } from '@angular/core';
import { Ledgers } from '../../../../interfaces/ledgers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LedgersService } from '../../../../services/ledgers.service';
import { GroupService } from '../../../../services/group.service';

@Component({
  selector: 'app-update-ledger',
  templateUrl: './update-ledger.component.html',
  styleUrls: ['./update-ledger.component.css']
})
export class UpdateLedgerComponent implements OnInit {
  ledgersDetails: Object;
  group$: Object;
  ledgers$: Ledgers = new Ledgers();
ledgers : Ledgers = new Ledgers();
registerForm: FormGroup;  
  submitted = false;
  typeTitle=["Credit","Debit"]
  ledgerTitle=["Residential Ledger","Vendor Ledger","Bank Ledger","Cash Ledger"]

  constructor(private route: ActivatedRoute, private data: LedgersService,private router: Router,private data1:GroupService,private formBuilder: FormBuilder) {
		this.route.params.subscribe( params => this.ledgers$ = params.ledgersId );
  }
newLedgers(): void {
    this.submitted = false;
    this.ledgers = new Ledgers();
  }
  
  save() {
    this.data.updateLedgersById(this.ledgers$,this.ledgers)
      .subscribe(data => {
      this.router.navigate(['ledgers'])
      alert("Successfully Updated")}, error => alert("Unable to Edit"));
   this.ledgers = new Ledgers();
  }
  ngOnInit() {
    this.data1.showAllGroup().subscribe(
      data1 => this.group$ = data1 
      
    );
    this.data.showLedgersById(this.ledgers$).subscribe(
      data => this.ledgers = data 
	);
	console.log(this.data);
  console.log(this.ledgers$);
  
  this.registerForm = this.formBuilder.group({
    accountName: ['', Validators.required],
     amountType: ['', Validators.required],
     openingBalance: ['', Validators.required],
      groupIdFk: ['', Validators.required],
     ledgerType: ['', Validators.required]
});


  }
  get f() { return this.registerForm.controls; }
  myFunction(){
   
    this.router.navigate(['ledgers'])
  }
  onSubmit() {
    this.submitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
  }
  rediectToListDetails(urlObj){
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