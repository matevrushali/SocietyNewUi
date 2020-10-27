import { Component, OnInit } from '@angular/core';
import { BalanceSheetService } from '../../../../services/balance-sheet.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { TrialBalance } from '../../../../interfaces/trial balance';

@Component({
  selector: 'app-trial-balance-sheet',
  templateUrl: './trial-balance-sheet.component.html',
  styleUrls: ['./trial-balance-sheet.component.css']
})
export class TrialBalanceSheetComponent implements OnInit {
  balance:TrialBalance = new TrialBalance();
  pageActual : Number=1;
  trialBalance$:Object;
  trialBalanceSlots$:Object;
  isLiability:boolean=false;
  isIncome:boolean=false;
  isAssets:boolean=false;
  isExpenses:boolean=false;
  isIncomeGroupName:boolean=false;
  isAssetsGroupName:boolean=false;
  isExpensesGroupName:boolean=false;
  isLiabilitiesGroupName:boolean=false;
  isTrialBalanceSlot1:boolean=false;
  isTrialBalanceSlot2:boolean=false;
  
  yearPeriod=["01-April-2018 to 31-march-2019","01-April-2019 to 31-march-2020"];

  constructor(private balanceSheetService: BalanceSheetService) { }

  ngOnInit() {
    
    this.balanceSheetService.getTrialBalanceSheetDetails().subscribe(
      data => this. trialBalance$ = data 
    );
    this.balanceSheetService.getTrialBalanceSheetDetailsSlot2().subscribe(
      data => this.trialBalanceSlots$ = data 
    );
  }
  clickLiabilities(){
    this.isLiability=true;
    
  }
  clickIncome(){
    this.isIncome=true;
  }
  clickAssets(){
    debugger;
    this.isAssets=true;
  }
  clickExpenses(){
    debugger;
    this.isExpenses=true;
  }
  incomeGroupName()
  {
    debugger;
    this.isIncomeGroupName=true;
  }
  assetsGroupName()
  {
    this.isAssetsGroupName=true;
  }
  expenseGroupName()
  {
    this.isExpensesGroupName=true;
  }
  liabilitiesGroupName()
  {
    this.isLiabilitiesGroupName=true;
  }
  onChangeYear(value){
    if(value==="01-April-2018 to 31-march-2019")
  {
    this.balanceSheetService.getTrialBalanceSheetDetails().subscribe(
      data => this. trialBalance$ = data 
    );
    this.isTrialBalanceSlot1=true;
    this.isTrialBalanceSlot2=false;
    
  }
  else if(value==="01-April-2019 to 31-march-2020")
    {
      this.balanceSheetService.getTrialBalanceSheetDetailsSlot2().subscribe(
        data => this.trialBalanceSlots$ = data 
      );
      this.isTrialBalanceSlot2=true;
       this.isTrialBalanceSlot1=false;
  }

  }
}
