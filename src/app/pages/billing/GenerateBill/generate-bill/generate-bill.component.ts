import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {

  generateBill$: Object
  pageActual : Number=1;
  privilegesList: string;
  dtOptions: any = {}
   dtTrigger = new Subject();
   constructor(private data: GenerateBillService, private router: Router,private cookieService:CookieService) { }
   
   ngOnInit() {
     this.data.showAllGenarteBill().subscribe(
       data => {this.generateBill$ = data 
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
     if(this.privilegesList.includes("saveGenerateBill")){
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
 