import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OccupancyService } from '../../../../services/occupancy.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-unit-manager',
  templateUrl: './unit-manager.component.html',
  styleUrls: ['./unit-manager.component.css']
})
export class UnitManagerComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  occupancy$: any;
  pageActual: Number = 1;
  privilegesList: string;
  constructor(private occupancyService: OccupancyService, private router: Router, private cookieService: CookieService) { }

 
  ngOnInit() {

    this.occupancyService.getOccupancy().subscribe(
      data => {
      this.occupancy$ = data
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
 
 
  showSaveButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("saveUsersOccupancyDetails")) {
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
