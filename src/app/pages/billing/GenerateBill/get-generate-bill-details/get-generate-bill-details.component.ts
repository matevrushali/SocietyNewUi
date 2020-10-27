import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import { Occupancy } from '../../../../interfaces/occupancy';
import { ActivatedRoute, Router } from '@angular/router';
import { OccupancyService } from '../../../../services/occupancy.service';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-generate-bill-details',
  templateUrl: './get-generate-bill-details.component.html',
  styleUrls: ['./get-generate-bill-details.component.css']
})
export class GetGenerateBillDetailsComponent implements OnInit {
  generateBill$:GenerateBill = new GenerateBill();
  generateBill: GenerateBill = new GenerateBill();
  privilegesList: string;
  blockTower : boolean=false;
  exceptedFlat : boolean=false;
  singleMultiple : boolean=false;
  occ: Occupancy = new Occupancy();
   constructor(private route: ActivatedRoute,private occupancy: OccupancyService, private data: GenerateBillService,private router:Router,private cookieService:CookieService) 
   {this.route.params.subscribe( params => this.generateBill$ = params.generateBillsId ); }
  
     ngOnInit() {
      
       this.data.showGenerateBillById(this.generateBill$ ).subscribe(
    data => {this.generateBill = data;
  
      
      if (this.generateBill.excludeFlat != null) {
        this.occupancy.getOccupancyDetailsById(this.generateBill.excludeFlat).subscribe(
          data => this.occ = data
        )
      }
      else if (this.generateBill.singleMultipleFlat != null) {
        this.occupancy.getOccupancyDetailsById(this.generateBill.singleMultipleFlat).subscribe(
          data => this.occ = data
        )
      }
  
      if (this.generateBill.billFor == "All") {
        this.exceptedFlat = true;
      }
      if (this.generateBill.billFor == "Selected Tower") {
        this.blockTower = true;
        this.exceptedFlat = true;
      }
      if (this.generateBill.billFor == "Single/Multiple Flat Selected") {
        this.singleMultiple = true;
      }
  
    }
     
    
    
      );
    }
    myFunction()
  {
  this.router.navigate(['generateBill'])
  }
  showUpdateButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("updateGenerateBillById")){
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
    callSweetAlert(value){
      this.generateBill$=value;
      
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
              this.data.deleteGenerateBillById(this.generateBill$).subscribe(data => {
                this.router.navigate(['billing_heads/generate_bill'])
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
              this.router.navigate(['billing_heads/generate_bill'])
             });
          }
  
        console.log(willDelete)
      });
  
  
        }
  }
  