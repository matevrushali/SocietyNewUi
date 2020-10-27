import { Component, OnInit } from '@angular/core';
import { LedgersService } from '../../../../services/ledgers.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-general-ledgers',
  templateUrl: './general-ledgers.component.html',
  styleUrls: ['./general-ledgers.component.css']
})
export class GeneralLedgersComponent implements OnInit {
  ledgers$: Object
  pageActual : Number=1;
  privilegesList: string;
  constructor(private data: LedgersService,
    private router: Router,
    private cookieService:CookieService) { }

  ngOnInit() {
    this.data.getLedgersExcpetMember().subscribe(
      data => this.ledgers$ = data 
    );
  }
  showStatementOfAccount(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("getLedgersById")){
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

