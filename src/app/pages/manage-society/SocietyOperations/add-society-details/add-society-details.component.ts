import { Component, OnInit } from '@angular/core';
import { Society } from '../../../../interfaces/society';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SocietyService} from '../../../../services/society.service'
import {ChannelPartnerService} from '../../../../services/channel-partner.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-add-society-details',
  templateUrl: './add-society-details.component.html',
  styleUrls: ['./add-society-details.component.scss']
})
export class AddSocietyDetailsComponent implements OnInit {

  society: Society = new Society();
  soc: any;
  society$: Society = new Society();
  channelPartner$: Object;
  submitted = false;
  State = ["Maharashtra"]
  District = ["Mumbai", "Pune"]
  Tehsil = ["Mumbai", "Pune"]
  societyFormGroup: FormGroup;
  obj: Object;
  societyCount : Number;
  societyObject: Society = new Society();
  uniqueName: any;
  value: any;
  constructor(private societyService: SocietyService, private channel: ChannelPartnerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //	  this.society.accountType = "";
    this.society.societyAddressIdFk.state = "Maharashtra";
    // this.society.societyAddressIdFk.district = "Pune";
    // this.society.societyAddressIdFk.tehsil = "Pune";

    this.channel.getAllChannelPartner().subscribe(
      channel => this.channelPartner$ = channel
    );
    this.societyFormGroup = this.formBuilder.group({
      societyName: ['', Validators.required],
      societyUniqueName: ['', Validators.required],
      societyRegistrationNumber: ['', Validators.required],
      channelPartnerSocietyId: ['', Validators.required],
      wingsNumberOfBuildings: ['', Validators.required],
      numberOfFlats: ['', Validators.required],
      typeOfPropertyFlatType: ['', Validators.required],
      gstNumber: ['', Validators.required],
      tanNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      tehsil: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      pinCode: ['', Validators.required],
      monthlyMaintenanceCharges:['', Validators.required],

    });
  }
  get f() { return this.societyFormGroup.controls; }
  newSociety(): void {
    this.submitted = false;
    this.society = new Society();
  }
  save() {
    this.societyService.createSociety(this.society)
      .subscribe(data => {
        this.router.navigate(['manage_society'])
        alert("Successfully saved")
      }, error => alert("Unable to save due to some technical error"));
    this.society = new Society();
  }

  onSubmit() {
    this.submitted = true;
    debugger;
    if (this.societyFormGroup.invalid) {
      return;
    }
    if (this.society != null) {
      this.value = this.society.societyUniqueName;
      this.focusOutFunction(this.value);
    }
    // if(this.society.societyAddressIdFk.district==null)
    // {
    //   alert("please select district ");
    // }
    
  }
  myFunction() {

    this.router.navigate(['society'])
  }
  focusOutFunction(value) {
   
    debugger;
    var count=0;
    this.societyService.getSociety().subscribe(
      data => {
        console.log("****************8", data);
        this.society$ = data;
        this.soc = this.society$;
        this.societyCount=Object.keys(this.soc).length;
        if( this.societyCount == 0)
        { 
         
         this.save()
        }
        for (var temp of this.soc) {
          this.societyObject = temp;
          this.uniqueName = this.societyObject.societyUniqueName;
          // alert("hello : " + this.uniqueName);
         
          if (this.uniqueName === value) {
            
            alert("This Society Unique Name is taken, Try another.");
            return;
          }
          else{
            count=count+1;
          }
         
        }
        if(count>0)
        {
          this.save();

        }
      });
   
  }

  rediectToListDetails(urlObj){
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
