import { Component, OnInit } from '@angular/core';
import {BoardCommittee} from '../../../../interfaces/boardCommittee'
import { BoardCommitteeService } from '../../../../services/board-committee.service';
import { UsersFormService } from '../../../../services/users-form.service';

@Component({
  selector: 'app-add-board-committee',
  templateUrl: './add-board-committee.component.html',
  styleUrls: ['./add-board-committee.component.css']
})
export class AddBoardCommitteeComponent implements OnInit {
  other: boolean = true;
  boardCommittee:BoardCommittee=new BoardCommittee();
  usersForm$: Object;
  boardCommitteeTitle= ["Committee Member", "Resident", "Security Agency", "Other"]
  constructor(private data3: UsersFormService,private boardCommitteeService:BoardCommitteeService ) { }

  ngOnInit(): void {
    this.data3.getAllUsersFormDetails().subscribe(
      data3 => this.usersForm$ = data3
    );
  }

  callOther(value){
console.log(value);
if(value=='Other'){this.other=false;}
if(value=='Committee Member'){this.other=true;}
if(value=='Resident'){this.other=true;}
if(value=='Security Agency'){this.other=true;}
  }
  saveBoardCommittee(){
    this.boardCommitteeService.createBoardCommittee(this.boardCommittee)
    .subscribe(data => {
       
        alert("Successfully Saved ")
    }, error => alert("Unable to Save Due to Technical Error"));
this.boardCommittee = new BoardCommittee();
  }
  
 
 
}
