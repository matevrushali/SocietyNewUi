import { Component, OnInit } from '@angular/core';
import { Occupancy } from '../../../../interfaces/occupancy';
import { ActivatedRoute, Router } from '@angular/router';
import { OccupancyService } from '../../../../services/occupancy.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-unit-details',
  templateUrl: './get-unit-details.component.html',
  styleUrls: ['./get-unit-details.component.css']
})
export class GetUnitDetailsComponent implements OnInit {

  temp: Object;
  privilegesList: string;
  occupancy$: Occupancy = new Occupancy();
  occupancy: Occupancy = new Occupancy();
  constructor(private route: ActivatedRoute, private occupancyService: OccupancyService, private router: Router, private cookieService: CookieService) {
    this.route.params.subscribe(params => this.occupancy$ = params.occupancyDetailsId);
  }

  ngOnInit() {
    this.occupancyService.getOccupancyDetailsById(this.occupancy$).subscribe(
      data => {
        console.log("****************8", data);
        this.occupancy = data;
        this.occupancy.societyOccId = data.societyOccId;
      }, error => {
        console.log("################", error);
      }
    );
    //	console.log("1",this.occupancy);
    // console.log("2",this.occupancy.societyOccId);
    console.log("2", this.occupancy.societyOccId.societyId);
  }
  myFunction() {

    this.router.navigate(['occupancy'])
  }
  showUpdateButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("updateUsersOccupancyDetailsById")) {
      return true;
    }
    else {
      return false;
    }
  }

  showDeleteButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("deleteUsersOccupancyDetailsById")) {
      return true;
    }
    else {
      return false;
    }

  }
  callSweetAlert(value) {
    this.occupancy$ = value;

    var confirmMsg = {
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this entry!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }

    Swal.fire(confirmMsg)
      .then((willDelete) => {

        if (willDelete.value) {

          var resAlert = {
            title: "Success",
            text: "Deleted succcessfully",
            type: "success",
          }
          Swal.fire(resAlert).then((result) => {
            this.occupancyService.deleteOccupancy(this.occupancy$).subscribe(data => {
              this.router.navigate(['society/unit_manager'])
              alert("Deleted")
            }, error => alert("Unable to Deleted"));


          });
        } else {
          var resAlert = {
            title: "Warning",
            text: "You have canclled operation",
            type: "error",
          }
          Swal.fire(resAlert).then((result) => {
            this.router.navigate(['society/unit_manager'])
          });
        }

        console.log(willDelete)
      });


  }
  rediectToPage(urlObj) {

    {
      var url = urlObj.split(',');
      if (url.length > 1) {
        var urlParam = parseInt(url[1]);
        if (Number.isNaN(urlParam) == true) {
          url[1] = eval(url[1]);
        }
        else {
          url[1] = urlParam;
        }
      }
      this.router.navigate(url);
    }
  }
  rediectToUpdate(urlObj,otherVal){
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
}