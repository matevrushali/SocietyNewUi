import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingHead } from '../interfaces/billingHead';
@Injectable({
  providedIn: 'root'
})
export class BillingHeadService {
private baseUrl = 'http://localhost:8080/secured/billingHeads';
  constructor(private http: HttpClient) { }
  createBillingHead(billing: Object): Observable<Object>{
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveBillingHeads`,billing,{ headers, responseType: 'json' });

}
showAllBillingHead() {
	  
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(`${this.baseUrl}/getAllBillingHeads`,{ headers, responseType: 'json' });

}
showBillingHeadById(billingHeadsId):Observable<BillingHead> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get<BillingHead>(`${this.baseUrl}/getBillingHeadsById/`+billingHeadsId,{ headers, responseType: 'json' });

}
deleteBillingHead(billingHeadsId) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.delete(`${this.baseUrl}/deleteBillingHeadsById/`+billingHeadsId,{ headers, responseType: 'json' });
}
getBillingHeadById(billingHeadsId):Observable<BillingHead> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get<BillingHead>(`${this.baseUrl}/getBillingHeadsById/`+billingHeadsId,{ headers, responseType: 'json' });

}
updateBillingHeadById(billingHeadsId,billingHead: Object): Observable<Object>
	{

		console.log("I am in Update",billingHeadsId);

    console.log("I am in Update",billingHeadsId);
    console.log("I am in Update Biiling Head : ",billingHead);

	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateBillingHeadsById/`+billingHeadsId,billingHead,{ headers, responseType: 'json' });	
  }
  
	showAllRecurringBillingHead() {

    
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/showAllRecurringBillingHead`,{ headers, responseType: 'json' });
    
    }  
    showAllAdhocBillingHead() {

    
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getAllAdhocBillingHead`,{ headers, responseType: 'json' });
    
    }  
}
