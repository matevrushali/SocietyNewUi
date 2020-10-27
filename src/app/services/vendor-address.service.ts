import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorAddressService {
private baseUrl = 'http://localhost:8080/vendorAddress';
  constructor(private http: HttpClient) { }

getvendorAddress() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllVendorAddress`,{ headers, responseType: 'json' });

  }
}