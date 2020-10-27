import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EscalationMatrix } from '../../../../interfaces/escalationMatrix';
import { EscalationMatrixService } from '../../../../services/escalation-matrix.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-escalation-matrix-details',
  templateUrl: './get-escalation-matrix-details.component.html',
  styleUrls: ['./get-escalation-matrix-details.component.scss']
})
export class GetEscalationMatrixDetailsComponent implements OnInit {
  privilegesList: string;
  isTime:boolean = false;
  isDays:boolean = false;
  isFirstTime:boolean = false;
  isFirstDays:boolean = false;
  isSecondTime:boolean = false;
  isSecondDays:boolean = false;
  isThirdTime:boolean = false;
  isThirdDays:boolean = false;
  escalationMatrix$: EscalationMatrix = new EscalationMatrix();
  constructor(private route: ActivatedRoute, private data: EscalationMatrixService, private router: Router,private cookieService:CookieService) { 
  this.route.params.subscribe( params => this.escalationMatrix$ = params.escalationMatixId );
  }

  ngOnInit() {
    debugger;
 this.data.showEscalationMatrixtById(this.escalationMatrix$).subscribe(
      data => {
        this.escalationMatrix$ = data; 
     if(this.escalationMatrix$.firstResponceType == 'Minutes'){
    
      this.isTime = true;
      this.isDays = false;

     }
     else if(this.escalationMatrix$.firstResponceType == 'Hour'){
      this.isTime = true;
      this.isDays = false;

     }
     else if(this.escalationMatrix$.firstResponceType == 'Days'){
      this.isTime = false;
      this.isDays = true;
     
     }
     if(this.escalationMatrix$.firstEscalationType == 'Minutes'){
     
      this.isFirstTime = true;
      this.isFirstDays = false;

    }
    else if(this.escalationMatrix$.firstEscalationType == 'Hour'){
      this.isFirstTime = true;
      this.isFirstDays = false;


    }
    else if(this.escalationMatrix$.firstEscalationType == 'Days'){
     
      this.isFirstTime = false;
      this.isFirstDays = true;


    }
    if(this.escalationMatrix$.secondEscalationType == 'Minutes'){
      this.isSecondTime = true;
      this.isSecondDays = false;

    }
    else if(this.escalationMatrix$.secondEscalationType == 'Hour'){
      this.isSecondTime = true;
      this.isSecondDays = false;


    }
    else if(this.escalationMatrix$.secondEscalationType == 'Days'){
     
      this.isSecondTime = false;
      this.isSecondDays = true;


    }
    if(this.escalationMatrix$.thirdEscalationType == 'Minutes'){
      this.isThirdTime = true;
      this.isThirdDays = false;


    }
    else if(this.escalationMatrix$.thirdEscalationType == 'Hour'){
      this.isThirdTime = true;
      this.isThirdDays = false;

    }
    else if(this.escalationMatrix$.thirdEscalationType == 'Days'){
     
      this.isThirdTime = false;
      this.isThirdDays = true;

    }
  }
    );
	console.log("Data:"+this.data);
	console.log(this.escalationMatrix$);
  }
 
  showUpdateButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("updateEscalationMatrixById")){
      return true;
   }
   else{
     return false;
   }
  }

  showDeleteButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("deleteEscalationMatrixById")){
      return true;
   }
   else{
     return false;
   }}
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
  callSweetAlert(value){
    this.escalationMatrix$=value;
    
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
            this.data.deleteEscalationMatrixtById(this.escalationMatrix$).subscribe(data => {
              this.router.navigate(['society/escalation_matrix'])
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
      
}