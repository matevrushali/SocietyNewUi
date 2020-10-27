import { Component, OnInit } from '@angular/core';
import { ResidentVehicleService } from '../../../../services/resident-vehicle.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from "@angular/router";
import { ResidentVehicle } from '../../../../interfaces/residentVehicle';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-resident-vehicle-details',
  templateUrl: './get-resident-vehicle-details.component.html',
  styleUrls: ['./get-resident-vehicle-details.component.css']
})
export class GetResidentVehicleDetailsComponent implements OnInit {
  residentVehicleDetails : Object
  privilegesList: string;
  residentVehicle$: ResidentVehicle = new ResidentVehicle();
  residentVehicle:ResidentVehicle = new ResidentVehicle();
  temp:any;
  constructor(private route: ActivatedRoute, private residentVehicleService: ResidentVehicleService,private router: Router,private cookieService:CookieService) 
  {this.route.params.subscribe( params => this.residentVehicle$ = params.residentVehicleId); }

  ngOnInit() {
    
  this.residentVehicleService.showResidentVehicleById(this.residentVehicle$).subscribe(
    data => {
     console.log("****************8", data);
      this.residentVehicle = data;
    
      this.temp=this.residentVehicle.type;
    }, error =>{
      console.log("################", error);
    }
  );
       

  console.log("1=",this.residentVehicle);
  console.log("type",this.temp);


 

  }
  myFunction(){

    this.router.navigate(['residentVehicle'])
    }
    showUpdateButton(){
      this.privilegesList = this.cookieService.get("privilegeArray")
      if(this.privilegesList.includes("updateResidentVehicleById")){
        return true;
     }
     else{
       return false;
     }
    }
  
    showDeleteButton(){
      this.privilegesList = this.cookieService.get("privilegeArray")
      if(this.privilegesList.includes("deleteResidentVehicleById")){
        return true;
     }
     else{
       return false;
     }}
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
        this.residentVehicle$=value;
        
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
                this.residentVehicleService.deleteResidentVehicleById(this.residentVehicle$).subscribe(data => {
                  this.router.navigate(['residents/resident_vehicle_list'])
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
                this.router.navigate(['residents/resident_vehicle_list'])
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
