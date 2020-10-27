import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SocietyService } from '../../../../services/society.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Society } from '../../../../interfaces/society';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-society-details',
  templateUrl: './get-society-details.component.html',
  styleUrls: ['./get-society-details.component.scss']
})
export class GetSocietyDetailsComponent implements OnInit {

  societyDetails: Object;
  society$: Society = new Society();
  society: Society = new Society();
  privilegesList: any;
    constructor(private route: ActivatedRoute, private data: SocietyService,private router: Router,private cookieService:CookieService) { 
       this.route.params.subscribe( params => this.society$ = params.societyId );
     }
    
    ngOnInit() {
      this.data.getSocietyById(this.society$).subscribe(
        data => this.society = data 
      );
    console.log(this.data);
    console.log(this.society$);
    }
    myFunction(){
     
      this.router.navigate(['society'])
    }
    showUpdateButton(){
      this.privilegesList = this.cookieService.get("privilegeArray")
      if(this.privilegesList.includes("updateSocietyDetailsById")){
        return true;
     }
     else{
       return false;
     }
    }
  
    showDeleteButton(){
      this.privilegesList = this.cookieService.get("privilegeArray")
      if(this.privilegesList.includes("deleteSocietyDetailsById")){
        return true;
     }
     else{
       return false;
     }
  
    }
    callSweetAlert(value){
      this.society$=value;
      
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
              this.data.deleteSocietyById(this.society$).subscribe(data => {
                this.router.navigate(['society/manage_society'])
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