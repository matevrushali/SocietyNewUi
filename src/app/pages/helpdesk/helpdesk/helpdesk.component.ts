import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Helpdesk } from '../../../interfaces/helpdesk';
import { Router,ActivatedRoute } from "@angular/router";
import { HelpdeskService } from '../../../services/helpdesk.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.scss']
})
export class HelpdeskComponent implements OnInit, OnDestroy {
  dtOptions: any = {}
  dtTrigger = new Subject();
  privilegesList: string;
  helpdesk: Helpdesk[]
  filteredHelpdesk: Helpdesk[]
 
  constructor(private data: HelpdeskService, private router: Router,private cookieService:CookieService) { }
 

  ngOnInit() {
    this.data.showAllHelpdesk().subscribe(
      data => {
        this.helpdesk = data
        this.filteredHelpdesk = this.helpdesk
        this.dtTrigger.next();

      }
    ); 
   
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel','csv','pdf']
    }
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  filterContent(value){
    
    if(value ===''){
      this.filteredHelpdesk = this.helpdesk
    }else {
      this.filteredHelpdesk = this.helpdesk.filter(element => value===element.status);
    } 
  }
  showSaveButton(){
    this.privilegesList = this.cookieService.get("privilegeArray")
    if(this.privilegesList.includes("saveHelpdesk")){
      return true;
   }
   else{
     return false;
   }
  }
}
