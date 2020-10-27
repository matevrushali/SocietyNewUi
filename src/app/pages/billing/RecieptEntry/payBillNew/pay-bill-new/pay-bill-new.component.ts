import { Component, OnInit } from '@angular/core';
import { GenerateBill } from '../../../../../interfaces/generate-bill';
import { Occupancy } from '../../../../../interfaces/occupancy';
import { ActivatedRoute, Router } from '@angular/router';
import { OccupancyService } from '../../../../../services/occupancy.service';
import { GenerateBillService } from '../../../../../services/generate-bill.service';
import { RecieptEntry } from '../../../../../interfaces/recieptEntry';
import { RecieptEntryService } from '../../../../../services/reciept-entry.service';

@Component({
  selector: 'app-pay-bill-new',
  templateUrl: './pay-bill-new.component.html',
  styleUrls: ['./pay-bill-new.component.css']
})
export class PayBillNewComponent implements OnInit {
  generateBill$:GenerateBill = new GenerateBill();
  getDetails: GenerateBill = new GenerateBill();
  generateBill: GenerateBill = new GenerateBill();
  blockTower : boolean=false;
  exceptedFlat : boolean=false;
  singleMultiple : boolean=false;
  occ: Occupancy = new Occupancy();
  entries$: RecieptEntry=new RecieptEntry();
  submitted = false;
  constructor(private route: ActivatedRoute,private occupancy: OccupancyService, private data: GenerateBillService,private router:Router,private recieptService:RecieptEntryService) 
  {this.route.params.subscribe( params => this.generateBill$ = params.generateBillsId ); }
 

  ngOnInit(): void {
    
       this.data.showGenerateBillById(this.generateBill$ ).subscribe(
    data => {this.getDetails = data;
  
      
      if (this.getDetails.excludeFlat != null) {
        this.occupancy.getOccupancyDetailsById(this.getDetails.excludeFlat).subscribe(
          data => this.occ = data
        )
      }
      else if (this.getDetails.singleMultipleFlat != null) {
        this.occupancy.getOccupancyDetailsById(this.getDetails.singleMultipleFlat).subscribe(
          data => this.occ = data
        )
      }
  
      if (this.getDetails.billFor == "All") {
        this.exceptedFlat = true;
      }
      if (this.getDetails.billFor == "Selected Tower") {
        this.blockTower = true;
        this.exceptedFlat = true;
      }
      if (this.getDetails.billFor == "Single/Multiple Flat Selected") {
        this.singleMultiple = true;
      }
  
    }
    
      );
      this.recieptService.getRecieptListByBill(this.generateBill$).subscribe((res:any)=>{
        if(!res.status)
        {
          this.entries$ = res;
       
          if(this.getDetails.pendingAmount>0){
            // this.entries$.push({});
          }
        }
      });
  }
  newGenerateBill(): void {
    this.submitted = false;
    this.generateBill = new GenerateBill();
  }
  
  onFillingDetails(){
    this.submitted = true;
    this.saveRecieptEntry();
  }
  saveRecieptEntry() {
    this.recieptService.updateRecieptById(this.generateBill$, this.generateBill)
    .subscribe(data => {
      this.router.navigate(['billing_heads/generate_bill'])
      alert("Successfully Updated  Generate Bill")
    }, error => alert("Unable to update Generate Bill"));
  this.generateBill = new GenerateBill();



  }



}
