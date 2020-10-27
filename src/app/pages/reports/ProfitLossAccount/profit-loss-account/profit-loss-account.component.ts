import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { BalanceSheetService } from '../../../../services/balance-sheet.service';
import { TrialBalance } from '../../../../interfaces/trial balance';

@Component({
  selector: 'app-profit-loss-account',
  templateUrl: './profit-loss-account.component.html',
  styleUrls: ['./profit-loss-account.component.css']
})
export class ProfitLossAccountComponent implements OnInit {
  balance:TrialBalance = new TrialBalance();

  profitLoss$:Object;
  profitLossSlot$:Object;
  yearPeriod=["01-April-2018 to 31-march-2019","01-April-2019 to 31-march-2020"];
  isProfitLossSlot1:boolean=false;
  isProfitLossSlot2:boolean=false;

  constructor(private balanceSheetService: BalanceSheetService) { }

  ngOnInit() {
    
    this.balanceSheetService.getProfitAndLossSheetDetails().subscribe(
      data => this.profitLoss$ = data 
    );
    this.balanceSheetService.getProfitLossDetailsSlot2().subscribe(
      data => this.profitLossSlot$ = data 
    );
  }
  onChangeYear(value){
    if(value==="01-April-2018 to 31-march-2019")
  {
    this.balanceSheetService.getProfitAndLossSheetDetails().subscribe(
      data => this.profitLoss$ = data 
    );
    this.isProfitLossSlot1=true;
    this.isProfitLossSlot2=false;
    
  }
  else if(value==="01-April-2019 to 31-march-2020")
    {
      this.balanceSheetService.getProfitLossDetailsSlot2().subscribe(
        data => this.profitLossSlot$ = data 
      );
      this.isProfitLossSlot2=true;
       this.isProfitLossSlot1=false;
  }

  }

}
