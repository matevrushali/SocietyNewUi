import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { SocietyService } from '../../../../services/society.service'
@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.scss']
})
export class SocietyComponent implements OnInit, OnDestroy {

  society$: Object;
  pageActual: number = 1;
  privilegesList: string;

  dtOptions: any = {}
  dtTrigger = new Subject();

  constructor(private data: SocietyService, private router: Router, private cookieService: CookieService) { }



  ngOnInit() {
    this.data.getSociety().subscribe(
      data => {
      this.society$ = data;
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


  paginate(event) {

  }
  showSaveButton() {
    this.privilegesList = this.cookieService.get("privilegeArray")
    if (this.privilegesList.includes("saveSocietyDetails")) {
      return true;
    }
    else {
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
  rediectToDetails(urlObj,otherVal){
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
