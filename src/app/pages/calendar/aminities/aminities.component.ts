import { Component, OnInit } from '@angular/core';
import { AmenitiesnewService } from '../../../services/amenitiesnew.service';
import { AmemitiesNew } from '../../../interfaces/amenitiesNew';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface termsNconditions {

  term: string
}
@Component({
  selector: 'app-aminities',
  templateUrl: './aminities.component.html',
  styleUrls: ['./aminities.component.scss']
})
export class AminitiesComponent implements OnInit {
  newAmeneities:AmemitiesNew=new AmemitiesNew();
  submitted = false;
  termsAndConditions:termsNconditions[] = [{term:null}];
  constructor(private amenitiesNewService:AmenitiesnewService) { }

  ngOnInit() {
  }
 
addNewRow()
{
  this.termsAndConditions.push({term:null})
}


  saveAminity() {
    
    this.newAmeneities.termsAndConditions = JSON.stringify(this.termsAndConditions);
    //this.newAmeneities.termsAndConditions = this.termsAndConditions.toString();
    this.amenitiesNewService.createAmenities(this.newAmeneities)
    .subscribe(data => {
       
        alert("Successfully Saved ")
    }, error => alert("Unable to Save Due to Technical Error"));
this.newAmeneities = new AmemitiesNew();
  }
}
