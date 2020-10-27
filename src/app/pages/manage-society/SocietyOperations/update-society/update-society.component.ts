import { Component, OnInit } from '@angular/core';
import { Society } from '../../../../interfaces/society';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocietyService } from '../../../../services/society.service';
import { ChannelPartnerService } from '../../../../services/channel-partner.service';
@Component({
  selector: 'app-update-society',
  templateUrl: './update-society.component.html',
  styleUrls: ['./update-society.component.scss']
})
export class UpdateSocietyComponent implements OnInit {
  society$: Society = new Society();
  society: Society = new Society();
  soc: any;
  getsociety: Society = new Society();
  State = ["Maharashtra"]
  District = ["Mumbai", "Pune"]
  Tehsil = ["Mumbai", "Pune"]
  channelPartner$: Object;
  submitted = false;
  societyFormGroup: FormGroup;
  propertyTitle = ["SAVING", "CURRENT"]
  //Id:boolean=false;
  societyObject: Society = new Society();
  uniqueName: any;
  value: any;
  uni: any;
  beforeSaveUniqueName: string;
  constructor(private route: ActivatedRoute, private data: SocietyService, private channel: ChannelPartnerService, private router: Router, private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.society$ = params.societyId);
  }
  newSociety(): void {
    this.submitted = false;
    this.society = new Society();
  }
  save() {

    this.data.updateSociety(this.society$, this.society)
      .subscribe(data => {
        this.router.navigate(['manage_society'])
        alert("Successfully updated")
      }, error => alert("Unable to update due to some technical error"));
    this.society = new Society();
  }
  ngOnInit() {
    this.data.getSocietyById(this.society$).subscribe(
      data => {
      this.society = data
        this.beforeSaveUniqueName = this.society.societyUniqueName;
      });


    //console.log(this.data);
    //console.log(this.society);

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

  onSubmit() {
    this.submitted = true;

    if (this.societyFormGroup.invalid) {
      return;
    }

    this.value = this.society.societyUniqueName;
    if (this.beforeSaveUniqueName != this.society.societyUniqueName) {
      if (this.society.societyUniqueName != this.uni) {
        this.focusOutFunction(this.value);
      }
    }
    else {
      this.save();

    }


  }
  myFunction() {

    this.router.navigate(['manage_society']);
  }
  focusOutFunction(value) {
    alert(value)
    debugger;
    var count = 0;
    this.data.getSociety().subscribe(
      data => {
        console.log("****************8", data);
        this.getsociety = data;
        this.soc = this.getsociety;
        debugger;
        for (var temp of this.soc) {
          this.societyObject = temp;
          this.uniqueName = this.societyObject.societyUniqueName;
          // alert("hello : " + this.uniqueName);
          if (this.uniqueName === value) {
            alert("This Society Unique Name is taken, Try another.");
            return;
          }
          else {
            count = count + 1;
          }

        }
        if (count > 0) {
          this.save();

        }
      });
  }
  societyunique(value) {
    this.uni = value;
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
