import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { LedgersService } from '../../../../services/ledgers.service';
@Component({
  selector: 'app-ledgers-list',
  templateUrl: './ledgers-list.component.html',
  styleUrls: ['./ledgers-list.component.css']
})
export class LedgersListComponent implements OnInit {
  ledgers$: Object
  privilegesList: string;
  pageActual : Number=1;
  dtOptions: any = {}
  dtTrigger = new Subject();
  constructor(private data: LedgersService,private router: Router,private cookieService:CookieService) { }

  
  ngOnInit() {
    
    this.data.showAllLedgers().subscribe(
      data => {this.ledgers$ = data 
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
    if(this.privilegesList.includes("saveLedgers")){
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
    debugger;
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
