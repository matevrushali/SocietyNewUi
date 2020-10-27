import { Component, OnInit } from '@angular/core';
import { ResidentStaffManagerService } from '../../../../services/resident-staff-manager.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-resident-staff-list',
  templateUrl: './resident-staff-list.component.html',
  styleUrls: ['./resident-staff-list.component.css']
})
export class ResidentStaffListComponent implements OnInit {
  dtOptions: any = {}
  dtTrigger = new Subject();
  constructor(private service:ResidentStaffManagerService,private cookieService :CookieService,private router: Router) { }
  residentStaffManager$ :Object
  privilegesList: string;

  ngOnInit() {
    this.service.showAllResidentStaffManager().subscribe(
      data => {
        this.residentStaffManager$ = data;
        this.dtTrigger.next();
      }
    );
   
     
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel', 'csv', 'pdf']
    }
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  showSaveButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("createResidentStaffManager")){
      return true;
   }
   else{
     return false;
   }
  }
  rediectToPage(urlObj) {
  
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

