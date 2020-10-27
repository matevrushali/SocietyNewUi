import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Membership } from '../../../interfaces/membership';
import { MembershipService } from '../../../services/membership.service';
import { UsersFormService } from '../../../services/users-form.service';
import { MembershipEntityService } from '../../../services/membership-entity.service';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  membership: Membership = new Membership();
  usersForm$: Object;
  member$: Object;
  membershipEnityDetails: any = {};
  membershipTypeTitle = ["Custom Days", "Half Yearly", "Monthly", "Quarterly", "Weekly", "Yearly"]
  constructor(private membershipService: MembershipService,private data3: UsersFormService,private membershipEntService:MembershipEntityService) { }

  ngOnInit() {
    this.data3.getAllUsersFormDetails().subscribe(
      data3 => this.usersForm$ = data3
    );
    this.membershipEntService.getAllMembershipEntities().subscribe(
      data => this.member$ = data
    );
  }
  saveMembership() {
    debugger;
    var price =this.membershipEnityDetails.membershipCharges;
    console.log(price);
    if(this.membership.membershipType=='Yearly'){

      this.membership.totalCharges=price;//ithe direct as it is price dete
    }
    if(this.membership.membershipType=='Half Yearly'){

      this.membership.totalCharges=price*0.5;//ithe half dete
    }
    if(this.membership.membershipType=='Monthly'){

      this.membership.totalCharges=price/12;//. pan tujhi ji membership subscriptionchi?
    }
    if(this.membership.membershipType=='Quarterly'){
//yearly keli ahe by default.... he sagal chukich ahe... jar tyala saglyala same price bhetatey tar fayda kay tyacha... 
      this.membership.totalCharges=price/6;
    }
    if(this.membership.membershipType=='Weekly'){

      this.membership.totalCharges=price;
    }
    
    this.membershipService.createMembership(this.membership)
      .subscribe(data => {
        alert("Successfully Saved ")
      }, error => alert("Unable to Save Due to Technical Error"));
    this.membership = new Membership();
  }
  callCharges(value){
console.log("value",value);
this.membershipEntService.getMembershipEntityDetailsById(value).subscribe(
  data => this.membershipEnityDetails = data
);

  }
}
