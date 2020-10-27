import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {VendorBill} from '../interfaces/vendorBill'
@Injectable({
  providedIn: 'root'
})
export class VendorsBillService {

  private baseUrl = 'http://localhost:8080/secured/vendorBill';
  constructor(private http: HttpClient) { }
  addVendorBill(vendorBill: Object): Observable<Object>{
   
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveVendorBill`,vendorBill,{ headers, responseType: 'json' });
 
 }
 getAllVendorBillList() {
   
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllVendorBillList`,{ headers, responseType: 'json' });

  }
  getVendorBillById(vendorBillId):Observable<VendorBill> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<VendorBill>(`${this.baseUrl}/getVendorBillById/`+vendorBillId,{ headers, responseType: 'json' });

  }

}
