import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeManagerService } from '../../../../services/notice-manager.service';

@Component({
  selector: 'app-notice-manager',
  templateUrl: './notice-manager.component.html',
  styleUrls: ['./notice-manager.component.scss']
})
export class NoticeManagerComponent implements OnInit {
  notice$: Object
  pageActual:Number=1;
   constructor(private data: NoticeManagerService,private router: Router) { }
   ngOnInit() {
     this.data.showAllNoticeManage().subscribe(
       data => this.notice$ = data 
     );
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
 
