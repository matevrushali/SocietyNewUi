import { Component, OnInit } from '@angular/core';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersFormService } from '../../../../services/users-form.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-resident-details',
  templateUrl: './get-resident-details.component.html',
  styleUrls: ['./get-resident-details.component.css']
})
export class GetResidentDetailsComponent implements OnInit {

  temp: Object;
  usersForm$: UsersFormDetails = new UsersFormDetails();
  usersFormDetails: UsersFormDetails = new UsersFormDetails();
  ownerDetails:boolean=false;
tenantDetails:boolean=false;
  privilegesList: any;
  constructor(private route: ActivatedRoute, private userFormService: UsersFormService,private router: Router,private cookieService:CookieService ) {
    this.route.params.subscribe(params => this.usersForm$ = params.usersFormId);
  }
 
  ngOnInit() {
   
    this.userFormService.getUsersFormDetailsDetailsById(this.usersForm$).subscribe(
      data => {
       console.log("****************8", data);
        this.usersFormDetails = data;

        if( this.usersFormDetails.member == 'Owner'){
          this.ownerDetails = true;
          this.tenantDetails = false;
      
        }
        else if(this.usersFormDetails.member == 'Tenant'){
          this.ownerDetails = false;
          this.tenantDetails = true;
      
      
        }
      }, error =>{
        console.log("################", error);
      }
    );
  
  }
  myFunction(){
   
    this.router.navigate(['usersFormDetails'])
  }
  showUpdateButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("updateUsersFormDetailsById")){
      return true;
   }
   else{
     return false;
   }
  }

  showDeleteButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("deleteUsersFormDetailsById")){
      return true;
   }
   else{
     return false;
   }

  }
  rediectToUpdateDetails(urlObj,otherVal){
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
    }
  }
  callSweetAlert(value){
    this.usersForm$=value;
    
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
            this.userFormService.deleteUsersFormDetailsDetailsById(this.usersForm$).subscribe(data => {
              this.router.navigate(['society/resident_manager'])
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
            this.router.navigate(['manage_society'])
           });
        }

      console.log(willDelete)
    });


      }
      rediectToListDetails(urlObj){
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

