import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BoardCommittee} from '../../../../interfaces/boardCommittee'
import { BoardCommitteeService } from '../../../../services/board-committee.service';
import { UsersFormService } from '../../../../services/users-form.service';
@Component({
  selector: 'app-borad-committee-list',
  templateUrl: './borad-committee-list.component.html',
  styleUrls: ['./borad-committee-list.component.css']
})
export class BoradCommitteeListComponent implements OnInit {
  boardCommittee:BoardCommittee=new BoardCommittee();
  usersForm$: Object;

  constructor(private router: Router,private data3: UsersFormService,private boardCommitteeService:BoardCommitteeService ) { }

  ngOnInit(): void {
    this.data3.getAllUsersFormDetails().subscribe(
      data3 => this.usersForm$ = data3
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
  
}
