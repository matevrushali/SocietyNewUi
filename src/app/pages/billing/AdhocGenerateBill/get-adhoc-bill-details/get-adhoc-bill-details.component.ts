import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../interfaces/generate-bill';
import { Occupancy } from '../../../../interfaces/occupancy';
import { OccupancyService } from '../../../../services/occupancy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-adhoc-bill-details',
  templateUrl: './get-adhoc-bill-details.component.html',
  styleUrls: ['./get-adhoc-bill-details.component.css']
})
export class GetAdhocBillDetailsComponent implements OnInit {

  adhocGenerateBill$: GenerateBill = new GenerateBill();
  blockTower: boolean = false;
  excludeFlat: boolean = false;
  singleMultipleFlats: boolean = false;
  occ: Occupancy = new Occupancy();
  generate:Object;
  privilegesList: string;
  constructor(private occupancy: OccupancyService, private route: ActivatedRoute,  private generateService: GenerateBillService, private router: Router,private cookieService:CookieService) {
    this.route.params.subscribe(params => this.generate = params.adhocGenerateBillId);
  }

  ngOnInit() {
    this.generateService.showGenerateBillById(this.generate).subscribe(
      data => {
        this.adhocGenerateBill$ = data
        if (this.adhocGenerateBill$.excludeFlat != null) {
          this.occupancy.getOccupancyDetailsById(this.adhocGenerateBill$.excludeFlat).subscribe(
            data => this.occ = data
          )
        }
        else if (this.adhocGenerateBill$.singleMultipleFlat != null) {
          this.occupancy.getOccupancyDetailsById(this.adhocGenerateBill$.singleMultipleFlat).subscribe(
            data => this.occ = data
          )
        }

        if (this.adhocGenerateBill$.billFor == "All") {
          this.excludeFlat = true;
        }
        if (this.adhocGenerateBill$.billFor == "Selected Tower") {
          this.blockTower = true;
          this.excludeFlat = true;
        }
        if (this.adhocGenerateBill$.billFor == "Single/Multiple Flat Selected") {
          this.singleMultipleFlats = true;
        }

      }
    );
   
   
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
    callSweetAlert(value){
      this.generate=value;
      
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
              this.generateService.deleteGenerateBillById(this.generate).subscribe(data => {
                this.router.navigate(['billing_heads/adhoc_generate_bill'])
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
              this.router.navigate(['billing_heads/adhoc_generate_bill'])
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