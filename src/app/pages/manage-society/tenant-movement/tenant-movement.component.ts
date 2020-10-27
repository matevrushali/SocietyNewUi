import { Component, OnInit } from '@angular/core';
import { Occupancy } from '../../../interfaces/occupancy';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OccupancyService } from '../../../services/occupancy.service';
import { TenantManagerService } from '../../../services/tenant-manager.service';
import {TenantManager} from '../../../interfaces/tenantMovement'
@Component({
  selector: 'app-tenant-movement',
  templateUrl: './tenant-movement.component.html',
  styleUrls: ['./tenant-movement.component.css']
})
export class TenantMovementComponent implements OnInit {
tenant_manager:TenantManager= new TenantManager();
  occupancy : Occupancy = new Occupancy();
  occupancy$:Object;
  ResidentType=["Tenant","Allotee"]
  isForm: boolean = false;
  constructor(private occupancyService : OccupancyService,private tenantManagerService:TenantManagerService) { }

  ngOnInit() {
    this.occupancyService.getOccupancy().subscribe(
      data => this.occupancy$ = data
      );
  }
  formCall(value){
    this.isForm=true;
    this.tenant_manager.flatId=value;
    
  }
  saveTenantManager() {
    
    this.tenantManagerService.saveTenantManager(this.tenant_manager)
    .subscribe(data => {
       
        alert("Successfully Saved ")
    }, error => alert("Unable to Save Due to Technical Error"));
this.tenant_manager = new TenantManager();
  }

}