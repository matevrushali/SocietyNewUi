import { Component, OnInit } from '@angular/core';
import { VoucherEntryService } from '../../../../services/voucher-entry.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from "@angular/router";
import { Voucher } from '../../../../interfaces/voucher';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-voucher-entry-details',
  templateUrl: './get-voucher-entry-details.component.html',
  styleUrls: ['./get-voucher-entry-details.component.css']
})
export class GetVoucherEntryDetailsComponent implements OnInit {

  voucherEntry$:Voucher=new Voucher();
privilegesList: string;
cheque :boolean=false;
  constructor(private route: ActivatedRoute, private data: VoucherEntryService,private router:Router,private cookieService:CookieService) {
this.route.params.subscribe( params => this.voucherEntry$ = params.voucherId );
	  }
   
  ngOnInit() {
    debugger;
 this.data.getVoucherEntryById(this.voucherEntry$).subscribe(
      data => {this.voucherEntry$ = data 
      if(this.voucherEntry$.voucherType=="BANK PAYMENT" || this.voucherEntry$.voucherType=="BANK RECIEPT" || this.voucherEntry$.voucherType == "JOURNAL")
      {
        this.cheque=true;
      }
      }
      
      );
  //console.log(this.data.errorMsg);
  console.log("You have got the details of ID:",this.voucherEntry$);

  }
  myFunction (){
    this.router.navigate(['voucherEntry'])

}
showUpdateButton(){
  this.privilegesList = this.cookieService.get("privilegeArray")
  if(this.privilegesList.includes("updateVoucherEntryById")){
    return true;
 }
 else{
   return false;
 }
}

showDeleteButton(){
  this.privilegesList = this.cookieService.get("privilegeArray")
  if(this.privilegesList.includes("deleteVoucherEntryById")){
    return true;
 }
 else{
   return false;
 }}
 

 callSweetAlert(value){
  this.voucherEntry$=value;
  
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
          this.data.deleteVoucherEntryById(this.voucherEntry$).subscribe(data => {
            this.router.navigate(['transaction/voucher_entry_list'])
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
          this.router.navigate(['transaction/voucher_entry_list'])
         });
      }

    console.log(willDelete)
  });


  
}
rediectToList(urlObj) {
  
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
}
