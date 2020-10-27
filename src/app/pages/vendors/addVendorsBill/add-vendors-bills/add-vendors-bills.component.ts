import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VendorsService } from '../../../../services/vendors.service';
import { VendorBill } from '../../../../interfaces/vendorBill';
import { VendorsBillService } from '../../../../services/vendors-bill.service'
@Component({
  selector: 'app-add-vendors-bills',
  templateUrl: './add-vendors-bills.component.html',
  styleUrls: ['./add-vendors-bills.component.css']
})
export class AddVendorsBillsComponent implements OnInit {
  vendorBill: VendorBill = new VendorBill();
  registerForm: FormGroup;
  usersForm$: Object;
  isChooseDueDate: boolean = false;
  expensesTitle = ["Labour Charges", "Festival Celebration Expenses", "GYM Maintainance", "Annual Maintainance Charges", "Repairs & Maintainance", "LEGAL FEES","OFFICE Expenses","Swimming Pool Maintainance Charges","Salary Expenses","Bank Charges","Electricity Bill Expenses","Fire Safty Exp","Plumbing Material Exp","Broadband Charges"]
  dueDateTitle=["No Date","1 week","10 days","15 days","20 days","Choose Date"]
  constructor(private vendorsBillService: VendorsBillService,private vendors :VendorsService) { }

  ngOnInit(): void {
    debugger;
    this.vendors.getVendors().subscribe(
      data3 => this.usersForm$ = data3
    );
  }
  saveVendorBill() {
    this.vendorsBillService.addVendorBill(this.vendorBill)
      .subscribe(data => {
        alert("Successfully Saved ")
      }, error => alert("Unable to Save Due to Technical Error"));
    this.vendorBill = new VendorBill();
  }
  callDueDate(value) {
    if (value === 'Choose Date') {
      this.isChooseDueDate = true;
    }
    else if (value === '1 week') {
      this.isChooseDueDate = false;
    }
    else if (value === '10 Days') {
      this.isChooseDueDate = false;
    }
    else if (value === '15 Days') {
      this.isChooseDueDate = false;
    }
    else if (value === '20 Days') {
      this.isChooseDueDate = false;
    }

  }
 
}
