import { Component, OnInit } from '@angular/core';
import { OccupancyService } from '../../../services/occupancy.service';
@Component({
  selector: 'app-import-flats-units',
  templateUrl: './import-flats-units.component.html',
  styleUrls: ['./import-flats-units.component.css']
})
export class ImportFlatsUnitsComponent implements OnInit {

  constructor(private occupancyService : OccupancyService) { }

  ngOnInit() {
  }
  importUnit(){
    this.occupancyService.importUnitDetails().subscribe(data => alert("Successfully uploaded."), 
    error => alert("Unable to upload."));
  }
}
