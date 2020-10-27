import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParkingService } from '../../../services/parking.service';

import { Parking } from '../../../interfaces/parking';
@Component({
  selector: 'app-import-parking',
  templateUrl: './import-parking.component.html',
  styleUrls: ['./import-parking.component.css']
})
export class ImportParkingComponent implements OnInit {
  uploadForm: FormGroup;
  file: any;
  willDownload: boolean;
  // parking : Parking = new Parking();
  parking:Parking[];
  constructor(private parkingService : ParkingService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  
  }
 
  importParkingSlots(){
    this.parkingService.importParkingDetails().subscribe(data => alert("Successfully uploaded."), 
    error => alert("Unable to upload."));
  }
  onFileChange(ev) {
    this.file = ev.target.files[0];
    }
    importDataexcel()
{
  this.parkingService.importParkingDetails().subscribe(data => alert("Successfully uploaded."), 
     error => alert("Unable to upload."));

}}
