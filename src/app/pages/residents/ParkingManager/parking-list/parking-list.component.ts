import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../../../services/parking.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service'
@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  parking$: Object;
pageActual:Number=1;
data: any;
  privilegesList: any;
/*parkingType:String;
parking : Parking = new Parking();*/
  constructor(private parkingService: ParkingService, private router: Router,private cookieService:CookieService) { }
  ngOnInit() {
  this.parkingService.showAllParking().subscribe(
      data => {this.data = data 
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
  if(this.privilegesList.includes("saveParkingDetails")){
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