import { Component, OnInit } from '@angular/core';
import { Parking } from '../../../../interfaces/parking';
import { OccupancyService } from '../../../../services/occupancy.service';
import { ParkingService } from '../../../../services/parking.service';
import { ActivatedRoute,Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css']
})
export class AddParkingComponent implements OnInit {
  flat$: Object;
  
  parking : Parking = new Parking();
 submitted = false;
 registerForm: FormGroup;
 typeTitle=["Two Wheeler","Four Wheeler"]
 constructor(private parkingService : ParkingService,private data1:OccupancyService,private router: Router,private formBuilder: FormBuilder) { }

 ngOnInit() {
   this.data1.getOccupancy().subscribe(
     data1 => this.flat$ = data1 
     
   );
   this.registerForm = this.formBuilder.group({
     parkingNumber: ['', Validators.required],
     parkingType: ['', Validators.required],
     parkingArea: ['', Validators.required],
     unitDetailsIdFk: ['', Validators.required]
   
 });
 }
 get f() { return this.registerForm.controls; }
newParking(): void {
   this.submitted = false;
   this.parking = new Parking();
 }
 
 save() {
   this.parkingService.createParking(this.parking)
     .subscribe(data => {
      this.router.navigate(['residents/parking_list']);
  
   alert("Successfully Saved")}, error => alert("Unable to Save"));
   this.parking = new Parking();
 }
 
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
