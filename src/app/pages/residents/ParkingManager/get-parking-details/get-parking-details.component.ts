import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../../../services/parking.service';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router} from "@angular/router";
import { Parking } from '../../../../interfaces/parking';
import { Occupancy } from '../../../../interfaces/occupancy';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-parking-details',
  templateUrl: './get-parking-details.component.html',
  styleUrls: ['./get-parking-details.component.css']
})
export class GetParkingDetailsComponent implements OnInit {
  parkingDetails: Object;
  parking$: Parking = new Parking();
  parking: Parking = new Parking();
  privilegesList: string;
  constructor(private route: ActivatedRoute, private parkingService: ParkingService, private router: Router,private cookieService:CookieService ) { 
  this.route.params.subscribe( params => this.parking$ = params.parkingId );
  }
  ngOnInit() {
 this.parkingService.showparkingById(this.parking$).subscribe(
      data => {
        console.log("****************8", data);
         this.parking = data;
         //this.usersFormDetails.unitDetailsIdFk = data.unitDetailsIdFk;
       }, error =>{
         console.log("################", error);
       }
    );
	//console.log(this.data);
  console.log(this.parking);
  // console.log(this.parking.unitDetailsIdFk.occupancyDetailsId);
  }
  myFunction(){
   
    this.router.navigate(['parking'])
  }
  showUpdateButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("updateParkingDetailsById")){
      return true;
   }
   else{
     return false;
   }
  }

  showDeleteButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("deleteParkingDetailsById")){
      return true;
   }
   else{
     return false;
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
    callSweetAlert(value){
      this.parking$=value;
      
      var confirmMsg = {
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this entry!",
        type: 'warning',
        showConfirmButton: true,
        showCancelButton: true     
      }
      
      Swal.fire(confirmMsg)
      .then((willDelete) => {
  
          if(willDelete.value){
  
            var resAlert ={
              title: "Success",
              text: "Deleted succcessfully",
              type: "success",
            }
             Swal.fire(resAlert).then((result) => {
              this.parkingService.deleteParkingById(this.parking$).subscribe(data => {
                this.router.navigate(['residents/parking_list'])
                alert("Deleted")
               }, error => alert("Unable to Deleted"));
              
               
             });
          }else{
            var resAlert ={
              title: "Warning",
              text: "You have canclled operation",
              type: "error",
            }
             Swal.fire(resAlert).then((result) => {
              this.router.navigate(['residents/parking_list'])
             });
          }
  
        console.log(willDelete)
      });
  
  
    }
    rediectToListPage(urlObj) {
  
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
}
