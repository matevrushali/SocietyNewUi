import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenerateBill } from '../interfaces/generate-bill';

@Injectable({
  providedIn: 'root'
})
export class GenerateBillService {
  private baseUrl = 'http://localhost:8080/secured/generateBill';
  constructor(private http: HttpClient) { }

  createGenerateBill(generate: Object): Observable<Object>{
    console.log('I am in Service Create method');
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveGenerateBill`,generate,{ headers, responseType: 'json' });
     console.log('I am in Service Create method AFTER SAVING');
 } 
 showAllGenarteBill() {

    
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(`${this.baseUrl}/getAllGenerateBill`,{ headers, responseType: 'json' });

}
showAllAdhocTrueGenarteBill() {

    
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(`${this.baseUrl}/getAllAdhocTrueGenerateBill`,{ headers, responseType: 'json' });

}
showAllPostGenarteBill() {

    
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(`${this.baseUrl}/getAllPostGenerateBill`,{ headers, responseType: 'json' });

}
   showGenerateBillById(generateBillsId):Observable<GenerateBill> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<GenerateBill>(`${this.baseUrl}/getGenerateBillById/`+generateBillsId,{ headers, responseType: 'json' });
}
    updateGenerateBillById(generateBillsId,generateBill: Object): Observable<Object>
	{
		console.log("I am in Update",generateBillsId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateGenerateBillById/`+generateBillsId,generateBill,{ headers, responseType: 'json' });	
  } 
  
  updateAdhocGenerateBillById(generateBillsId,adhocBill: Object): Observable<Object>
  
	{ 
		console.log("I am in Update",generateBillsId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateGenerateBillById/`+generateBillsId,adhocBill,{ headers, responseType: 'json' });	
  } 

	deleteGenerateBillById(generateBillsId) {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteGenerateBillById/`+generateBillsId,{ headers, responseType: 'json' });

  }
 
    postGenerateBill(generateBillsId) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post(`${this.baseUrl}/postGenerateBillById/`+generateBillsId,{ headers, responseType: 'json' });
  
    }
    getRecieptEntryOfUser(billId,usersId) {
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getRecieptEntry/` + [billId,usersId], { headers, responseType: 'json' });
  
    }
    getCurrentOutstandingForAllUsersFormDetails() {
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getCurrentOutstandingForAllUsersFormDetails`, { headers, responseType: 'json' });//.catch(this.errorHandler);
  
    }
    getTotalBillingAmount(){
	  
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getTotalBillingamount`,{ headers, responseType: 'json' });
  
    }
    getTotalRecievdAmount(){
	  
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getTotalRecievedamount`,{ headers, responseType: 'json' });
  
    }
    getTotalPendingAmount(){
	  
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getTotalpendingAmount`,{ headers, responseType: 'json' });
  
    }
    getBillsAgainstBillHeadById(billingId):Observable<GenerateBill> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getBillsAgainstBillHeadById/`+billingId,{ headers, responseType: 'json' });
    
    }
    getBillsAgainstFlatsById(unitId):Observable<GenerateBill> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getBillsAgainstUnitById/`+unitId,{ headers, responseType: 'json' });
    
    }
    getTotalBillingAmountWRTBill(billingId):Observable<GenerateBill>{
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getTotalBillingamountOfBillOnly/`+billingId,{ headers, responseType: 'json' });
    
    }
    getTotalRecievedAmountWRTBill(billingId):Observable<GenerateBill>{
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getTotalRecievedAmountOfBillOnly/`+billingId,{ headers, responseType: 'json' });
    
    }
    getTotalPendingAmountWRTBill(billingId):Observable<GenerateBill>{
    
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getTotalPendingAmountOfBillOnly/`+billingId,{ headers, responseType: 'json' });
    
    }getTotalBillingAmountWRTFlat(unitId):Observable<GenerateBill>{
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getTotalBillingamountOfFlatOnly/`+unitId,{ headers, responseType: 'json' });
    
    }
    getTotalRecievedAmountWRTFlat(unitId):Observable<GenerateBill>{
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getTotalRecievedAmountOfFlatOnly/`+unitId,{ headers, responseType: 'json' });
    
    }
    getTotalPendingAmountWRTFlat(unitId):Observable<GenerateBill>{
     
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get<GenerateBill>(`${this.baseUrl}/getTotalPendingAmountOfFlatOnly/`+unitId,{ headers, responseType: 'json' });
    
    }
    getBillingTotalAmountOfBillingHeadAndFlat(billId,flatId) {
      debugger
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getTotalBillingamountOfBillAndFlatOnly/` + [billId,flatId], { headers, responseType: 'json' });
  
    }
}
