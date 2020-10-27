import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BillingHeadService } from '../../../../services/billing-head.service';

@Component({
  selector: 'app-billing-head',
  templateUrl: './billing-head.component.html',
  styleUrls: ['./billing-head.component.css']
})
export class BillingHeadComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  
  privilegesList: string;
  billing$: Object
  constructor(private data: BillingHeadService, private router: Router,private cookieService:CookieService) { }



  ngOnInit() {
	  this.data.showAllBillingHead().subscribe(
      data => {this.billing$ = data ;
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
  if(this.privilegesList.includes("saveBillingHeads")){
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