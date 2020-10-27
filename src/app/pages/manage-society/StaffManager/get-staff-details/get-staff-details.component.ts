import { Component, OnInit } from '@angular/core';
import { StaffManager } from '../../../../interfaces/staffManager';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffManagerService } from '../../../../services/staff-manager.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-staff-details',
  templateUrl: './get-staff-details.component.html',
  styleUrls: ['./get-staff-details.component.css']
})
export class GetStaffDetailsComponent implements OnInit {

  staffManagerDetails: Object
  privilegesList: string;
  staffManager$: StaffManager = new StaffManager();
  staffManager: StaffManager = new StaffManager();
  constructor(private route: ActivatedRoute, private data: StaffManagerService, private router: Router, private cookieService: CookieService) { this.route.params.subscribe(params => this.staffManager$ = params.staffManagerId); }
  ngOnInit() {
    this.data.showStaffManagerById(this.staffManager$).subscribe(
      data => this.staffManager = data
    );
    console.log(this.data);
    console.log(this.staffManager$);

  }
  myFunction() {
    this.router.navigate(['staffManager'])

  }

  showUpdateButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("updateStaffManagerById")) {
      return true;
    }
    else {
      return false;
    }
  }

  showDeleteButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("deleteStaffManagerById")) {
      return true;
    }
    else {
      return false;
    }
  }
  rediectToUpdateDetails(urlObj,otherVal){
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
 
   callSweetAlert(value){
    this.staffManager$=value;
    
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
            this.data.deleteStaffManagerById(this.staffManager$).subscribe(data => {
              this.router.navigate(['society/staff_manager'])
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
            this.router.navigate(['society/staff_manager'])
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

