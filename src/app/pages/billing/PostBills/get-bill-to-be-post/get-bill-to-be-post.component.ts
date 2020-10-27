import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-bill-to-be-post',
  templateUrl: './get-bill-to-be-post.component.html',
  styleUrls: ['./get-bill-to-be-post.component.css']
})
export class GetBillToBePostComponent implements OnInit {

  privilegesList: string;
  generateBill: GenerateBill = new GenerateBill();
  postBill$: Object
  blockTower: boolean = false;
  excludeFlat: boolean = false;
  singleMultipleFlats: boolean = false;
  constructor(private route: ActivatedRoute, private data: GenerateBillService,private router:Router,private cookieService:CookieService)
   {this.route.params.subscribe( params => this.postBill$ = params.generateBillsId ); }


  ngOnInit() {
    this.data.showGenerateBillById(this.postBill$ ).subscribe(
 data => {this.generateBill = data;
  if (this.generateBill.billFor == "All") {
    this.excludeFlat = true;
  }
  if (this.generateBill.billFor == "Selected Tower") {
    this.blockTower = true;
    this.excludeFlat = true;
  }
  if (this.generateBill.billFor == "Single/Multiple Flat Selected") {
    this.singleMultipleFlats = true;
  }

 }
   );
 console.log(this.data);
 console.log(this.postBill$);
 
 }
 myFunction(generateBillsId : number){
   
  // this.generateBill$=this.postBill.generateBillsId;

   this.data.postGenerateBill(generateBillsId).subscribe(data => alert("Bill Posted"), error => alert("Unable to Posted"));
  console.log(this.postBill$);
 }
 navigateFunction(){
   this.router.navigate(['postBillList'])
 }
 showPostButton(){
  this.privilegesList = this.cookieService.get("privilegeArray")
  if(this.privilegesList.includes("postGenerateBillById")){
    return true;
 }
 else{
   return false;
 }
}

showDeleteButton(){
  this.privilegesList = this.cookieService.get("privilegeArray")
  if(this.privilegesList.includes("deleteGenerateBillById")){
    return true;
 }
 else{
   return false;
 }}
 callSweetAlert(value){
  this.postBill$=value;
  
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
          this.data.deleteGenerateBillById(this.postBill$).subscribe(data => {
            this.router.navigate(['billing_heads/post_bill_list'])
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
          this.router.navigate(['billing_heads/post_bill_list'])
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
