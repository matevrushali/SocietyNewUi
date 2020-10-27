import { Component, OnInit } from '@angular/core';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { Voucher } from '../../../../interfaces/voucher';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-voucher-entry-list',
  templateUrl: './voucher-entry-list.component.html',
  styleUrls: ['./voucher-entry-list.component.css']
})
export class VoucherEntryListComponent implements OnInit {
  dtOptions: any = {}
  dtTrigger = new Subject();
voucherEntry$: Object;
privilegesList: string;
pageActual : Number=1;
  constructor(private data: VoucherEntryService,private router:Router,private cookieService:CookieService) { }

  ngOnInit() {
  this.data.getAllVoucherEntry().subscribe(
      data => {this.voucherEntry$ = data 
        this.dtTrigger.next();
      }
    );
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel','csv','pdf']
    }
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  showSaveButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("saveVoucherEntry")){
      return true;
   }
   else{
     return false;
   }
  }
  rediectToPage(urlObj) {
  
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
