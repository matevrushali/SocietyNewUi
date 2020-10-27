import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { BalanceSheetService } from '../../../../services/balance-sheet.service';
import { TrialBalance } from '../../../../interfaces/trial balance';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-balance-sheet-details',
  templateUrl: './balance-sheet-details.component.html',
  styleUrls: ['./balance-sheet-details.component.css']
})
export class BalanceSheetDetailsComponent implements OnInit {
  balance:TrialBalance = new TrialBalance();
  yearPeriod=["01-April-2018 to 31-march-2019","01-April-2019 to 31-march-2020"];
  isBalanceSheetSlot1:boolean=false;
  isBalanceSheetSlot2:boolean=false;
 
 balanceSheet$:Object;
 balanceSheetSlot$:Object;
  constructor(private balanceSheetService: BalanceSheetService,
    private cookieService: CookieService,
    private router:Router) { }

  ngOnInit() {

  this.balanceSheetService.getBalanceSheetDetails().subscribe(
    data => this.balanceSheet$ = data 
  );
    
  this.balanceSheetService.getTrialBalanceSheetDetailsSlot2().subscribe(
    data => this. balanceSheetSlot$= data 
  );
    
  }
  onChangeYear(value){
    if(value==="01-April-2018 to 31-march-2019")
  {
    this.balanceSheetService.getBalanceSheetDetails().subscribe(
      data => this.balanceSheet$ = data 
    );
      
    this.isBalanceSheetSlot1=true;
    this.isBalanceSheetSlot2=false;
    
  }
  else if(value==="01-April-2019 to 31-march-2020")
    {
      this.balanceSheetService.getTrialBalanceSheetDetailsSlot2().subscribe(
        data => this.balanceSheetSlot$ = data 
      );
      this.isBalanceSheetSlot2=true;
       this.isBalanceSheetSlot1=false;
  }

  }
    deleteMethod(){
    console.log("i am in delete  method....")
    this.cookieService.delete("userName");
    alert(" You have Logout sucessfully.");
    this.router.navigate(['authentication']);

}

}
