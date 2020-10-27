import { Component, OnInit } from '@angular/core';
import { VendorsService } from '../../../../services/vendors.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-new-vendors-list',
  templateUrl: './new-vendors-list.component.html',
  styleUrls: ['./new-vendors-list.component.css']
})
export class NewVendorsListComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  vendors$: Object;
  //JSZip = jsZip;
  pageActual: Number = 1;
  privilegesList: string;
  constructor(private data: VendorsService,  private router: Router, private cookieService: CookieService) { }
  ngOnInit() {
    this.data.getVendors().subscribe(
      data => {
      this.vendors$ = data;
        this.dtTrigger.next();
      }
    );
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel', 'csv', 'pdf']
    }
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  showSaveButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("saveVendors")) {
      return true;
    }
    else {
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

