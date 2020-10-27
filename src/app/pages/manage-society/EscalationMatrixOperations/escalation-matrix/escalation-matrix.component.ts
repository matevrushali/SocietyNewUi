import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EscalationMatrixService } from '../../../../services/escalation-matrix.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-escalation-matrix',
  templateUrl: './escalation-matrix.component.html',
  styleUrls: ['./escalation-matrix.component.scss']
})
export class EscalationMatrixComponent implements OnInit {
  escalationMatrix$: Object
  pageActual:Number=1;
  privilegesList: string;
  dtOptions: any = {}
  dtTrigger = new Subject();
   constructor(private data: EscalationMatrixService, private router: Router,private cookieService:CookieService) { }
 

 
   ngOnInit() {
     this.data.showAllEscalationMatrixt().subscribe(
       data => {this.escalationMatrix$ = data 
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
   if(this.privilegesList.includes("saveEscalationMatrix")){
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
 
