import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GenerateBillService } from '../../../../services/generate-bill.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { GenerateBill } from '../../../../interfaces/generate-bill';

@Component({
  selector: 'app-post-bills',
  templateUrl: './post-bills.component.html',
  styleUrls: ['./post-bills.component.css']
})
export class PostBillsComponent implements OnInit {

  dtOptions: any = {}
  dtTrigger = new Subject();
  postBill: GenerateBill = new GenerateBill();
  generateBill$: Object;
  pageActual: Number = 1;
  constructor(private data1: GenerateBillService, private router: Router, private route: ActivatedRoute, ) {
    this.route.params.subscribe(params => this.generateBill$ = params.generateBillsId);
  }
  

  ngOnInit() {
    this.data1.showAllPostGenarteBill().subscribe(
      data1 => {this.generateBill$ = data1;
        this.dtTrigger.next();
      }
    );
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: ['copy', 'print', 'excel','csv','pdf']
    }
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  myFunction(generateBillsId: number) {

    // this.generateBill$=this.postBill.generateBillsId;

    this.data1.postGenerateBill(generateBillsId).subscribe(data => alert("Bill Posted"), error => alert("Unable to Posted"));
    console.log(this.generateBill$);

  }
  rediectToDetails(urlObj,otherVal){
   
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
    if(otherVal)
    {
      url.push(otherVal);
    }
      this.router.navigate(url);
    }}
}




