import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../../services/helpdesk.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from "@angular/router";
import { Helpdesk } from '../../../interfaces/helpdesk';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-helpdesk',
  templateUrl: './get-helpdesk.component.html',
  styleUrls: ['./get-helpdesk.component.scss']
})
export class GetHelpdeskComponent implements OnInit {
  privilegesList: string;
  helpdesk$: Helpdesk=new Helpdesk();

  isOtherAmenities : boolean=false;
  isResidentName : boolean=false;
  constructor(private route: ActivatedRoute, private data: HelpdeskService,private router: Router,private cookieService:CookieService) { 
  this.route.params.subscribe( params => this.helpdesk$ = params.helpdeskId );
  }
 

  ngOnInit() {
    
    this.data.showHelpdeskById(this.helpdesk$).subscribe(
      data => {
        this.helpdesk$ = data 
      if(this.helpdesk$.residentOther=="Other facilities")
      {
        this.isOtherAmenities=true;
        this.isResidentName=false;
      }
      else if(this.helpdesk$.residentOther=="Block"){
        this.isResidentName=true;
        this.isOtherAmenities=false;
      }

      }
    );
	console.log(this.data);
	console.log(this.helpdesk$);
  }
  myFunction(){
   
    this.router.navigate(['helpdesk'])
  }
  showUpdateButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("updateHelpdeskById")){
      return true;
   }
   else{
     return false;
   }
  }

  showDeleteButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("deleteHelpdeskById")){
      return true;
   }
   else{
     return false;
   }}
   callSweetAlert(value){
    this.helpdesk$=value;
    
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
            this.data.deleteHelpdeskById(this.helpdesk$).subscribe(data => {
              this.router.navigate(['helpdesk'])
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
            this.router.navigate(['helpdesk'])
           });
        }

      console.log(willDelete)
    });


      }
}
