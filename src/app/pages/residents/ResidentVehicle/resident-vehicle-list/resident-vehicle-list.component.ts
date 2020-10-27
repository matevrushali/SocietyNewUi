import { Component, OnInit } from '@angular/core';
import { ResidentVehicleService } from '../../../../services/resident-vehicle.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-resident-vehicle-list',
  templateUrl: './resident-vehicle-list.component.html',
  styleUrls: ['./resident-vehicle-list.component.css']
})
export class ResidentVehicleListComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  privilegesList: string;

 residentVehicle$: Object
 pageActual:Number=1;
 
  constructor(private data: ResidentVehicleService,private router: Router,private cookieService:CookieService) { }
  
 
  ngOnInit() {
    this.data.showAllResidentVehicle().subscribe(
      data => {this.residentVehicle$ = data 
        this.dtTrigger.next();
      }
    );
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel','csv','pdf']
    }
   
  }
 
  showSaveButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("saveResidentVehicle")){
      return true;
   }
   else{
     return false;
   }
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
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
