import { Component, OnInit } from '@angular/core';
import { Parking } from '../../../../interfaces/parking';
import { OccupancyService } from '../../../../services/occupancy.service';
import { ParkingService } from '../../../../services/parking.service';
import { ActivatedRoute,Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-parking',
  templateUrl: './update-parking.component.html',
  styleUrls: ['./update-parking.component.css']
})
export class UpdateParkingComponent implements OnInit {
  flat$: Object;
  parkingDetails: Object;
  parking$: Parking = new Parking();
  parking: Parking = new Parking();
  submitted = false;
  registerForm: FormGroup;
  typeTitle = ["Two Wheeler", "Four Wheeler"]

  constructor(private route: ActivatedRoute, private data: ParkingService, private data1: OccupancyService, private router: Router, private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.parking$ = params.parkingId);
  }
  newParking(): void {
    this.submitted = false;
    this.parking = new Parking();
  }

  save() {
    this.data.updateParkingById(this.parking$, this.parking)
      .subscribe(data => {
        this.router.navigate(['residents/parking_list'])
        alert("Successfully update")
      }, error => alert("Unable to update"));
    this.parking = new Parking();
  }
  ngOnInit() {
debugger;
    this.data.showparkingById(this.parking$).subscribe(
      data => {this.parking = data
        console.log(this.parking)
      }
    );
    this.data1.getOccupancy().subscribe(
      data1 => this.flat$ = data1

    );
    console.log(this.data);
    console.log(this.parking$);

    this.registerForm = this.formBuilder.group({
      parkingNumber: ['', Validators.required],
      parkingType: ['', Validators.required],
      parkingArea: ['', Validators.required],
      unitDetailsIdFk: ['', Validators.required]

    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.save();
  }
  rediectToListPage(urlObj) {
  
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

