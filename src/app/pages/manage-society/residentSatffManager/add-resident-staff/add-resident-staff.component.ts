import { Component, OnInit } from '@angular/core';
import { ResidentStaffManagerService } from '../../../../services/resident-staff-manager.service';
import { ResidentStaffManager } from '../../../../interfaces/residentstaffManager';
import { VendorsService } from '../../../../services/vendors.service';

@Component({
  selector: 'app-add-resident-staff',
  templateUrl: './add-resident-staff.component.html',
  styleUrls: ['./add-resident-staff.component.css']
})
export class AddResidentStaffComponent implements OnInit {
  residentStaffManager: ResidentStaffManager = new ResidentStaffManager();
  vendor$:object;
  DesignationTypeTitle = ["Maid", "Driver", "Cook", "Iron", "Carpentar", "News Paper","Teacher","Car Washer","Service Provider","Water Supplier","Mali"]
  constructor( private residentStaffService:ResidentStaffManagerService,private vendorService:VendorsService) { }

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(
      data => this.vendor$ =  data 
    );
  }
saveResidentStaff(){
  this.residentStaffService.createResidentStaffManager(this.residentStaffManager)
  .subscribe(data => {
    alert("Successfully Saved ")
  }, error => alert("Unable to Save Due to Technical Error"));
this.residentStaffManager = new ResidentStaffManager();

}
}
