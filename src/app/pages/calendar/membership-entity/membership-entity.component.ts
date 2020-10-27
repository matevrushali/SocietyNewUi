import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembershipEntity } from '../../../interfaces/membershipEntity'
import { MembershipEntityService } from '../../../services/membership-entity.service';

@Component({
  selector: 'app-membership-entity',
  templateUrl: './membership-entity.component.html',
  styleUrls: ['./membership-entity.component.scss']
})
export class MembershipEntityComponent implements OnInit {
  membershipEntity: MembershipEntity = new MembershipEntity();
  membershipTypeTitle = ["Custom Days", "Half Yearly", "Monthly", "Quarterly", "Weekly", "Yearly"]
 
  constructor(private membershipEntityService: MembershipEntityService) { }

  ngOnInit() {
   
  }
  saveMembershipEntity() {
    debugger;
    this.membershipEntityService.createMembershipEntity(this.membershipEntity)
      .subscribe(data => {
        alert("Successfully Saved ")
      }, error => alert("Unable to Save Due to Technical Error"));
    this.membershipEntity = new MembershipEntity();
  }
}
