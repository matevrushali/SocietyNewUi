import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StaffManagerService } from '../../../../services/staff-manager.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-staff-manager',
  templateUrl: './staff-manager.component.html',
  styleUrls: ['./staff-manager.component.css']
})
export class StaffManagerComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  staffManager$:Object
pageActual:Number=1;
privilegesList: string;
  constructor(private data: StaffManagerService, private router: Router,private cookieService:CookieService) { }
  

  ngOnInit() {
	  this.data.showAllStaffManager().subscribe(
      data => {this.staffManager$ = data 
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
    if(this.privilegesList.includes("saveStaffManager")){
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
