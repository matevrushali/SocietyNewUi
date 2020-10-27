import { Component, OnInit } from '@angular/core';
import { Ledgers } from '../../../../interfaces/ledgers';
import { ActivatedRoute, Router } from '@angular/router';
import { LedgersService } from '../../../../services/ledgers.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-ledger-details',
  templateUrl: './get-ledger-details.component.html',
  styleUrls: ['./get-ledger-details.component.css']
})
export class GetLedgerDetailsComponent implements OnInit {

  privilegesList: string;
  ledgersDetails: Object;
  ledgers$: Ledgers = new Ledgers();
  ledgers: Ledgers = new Ledgers();
  
  constructor(private route: ActivatedRoute, private data: LedgersService,private router: Router,private cookieService:CookieService) { 
  this.route.params.subscribe( params => this.ledgers$ = params.ledgersId );
  }
 

  ngOnInit() {
 this.data.showLedgersById(this.ledgers$).subscribe(
      data =>{
      console.log("***************", data);
      this.ledgers = data 
    }, error =>{
      console.log("################", error);
    }
    );
	console.log(this.data);
	console.log(this.ledgers$);
  }
  myFunction(){
   
    this.router.navigate(['ledgers'])
  }
  showUpdateButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("updateLedgersById")){
      return true;
   }
   else{
     return false;
   }
  }

  showDeleteButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("deleteLedgersById")){
      return true;
   }
   else{
     return false;
   }}
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
   }}
   rediectToListDetails(urlObj) {
  
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
    this.ledgers$=value;
    
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
            this.data.deleteLedgersById(this.ledgers$).subscribe(data => {
              this.router.navigate(['ledgers/ledgers_list'])
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
            this.router.navigate(['ledgers/ledgers_list'])
           });
        }

      console.log(willDelete)
    });


      }
}