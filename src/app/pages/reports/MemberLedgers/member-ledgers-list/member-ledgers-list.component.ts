import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Ledgers } from '../../../../interfaces/ledgers';
import { CookieService } from 'ngx-cookie-service';
import { LedgersService } from '../../../../services/ledgers.service';

@Component({
  selector: 'app-member-ledgers-list',
  templateUrl: './member-ledgers-list.component.html',
  styleUrls: ['./member-ledgers-list.component.css']
})
export class MemberLedgersListComponent implements OnInit {

  memberLedgers$  : Object
  privilegesList: string;
  constructor(private router:Router,private data: LedgersService,private cookieService:CookieService) { }

  ngOnInit() {
    this.data.getAllResidentialLedgersOnly().subscribe(
      data => this.memberLedgers$ = data 
    );
  }
  showAllStatementButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("getAllStatementsAccount")){
      return true;
   }
   else{
     return false;
   }
  }
  rediectToDetails(urlObj,otherVal){
   
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
    if(otherVal)
    {
      url.push(otherVal);
    }
      this.router.navigate(url);
    }}

}
