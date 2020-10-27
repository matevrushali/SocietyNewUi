import { Component, OnInit } from '@angular/core';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-adhoc-generate-bill',
  templateUrl: './adhoc-generate-bill.component.html',
  styleUrls: ['./adhoc-generate-bill.component.css']
})
export class AdhocGenerateBillComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  adhocGenerateBill$: Object
  pageActual : Number=1;
  privilegesList: string;
  constructor(private generateService:GenerateBillService,
    private router: Router,private cookieService:CookieService) { }

  
  ngOnInit() {
    this.generateService.showAllAdhocTrueGenarteBill().subscribe(
      data => {this.adhocGenerateBill$ = data 
        this.dtTrigger.next();}
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
