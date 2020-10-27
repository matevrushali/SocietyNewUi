import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ledgers } from '../interfaces/ledgers';

@Injectable({
  providedIn: 'root'
})
export class LedgersService {
  private baseUrl = 'http://localhost:8080/secured/ledgers';
  
  constructor(private http: HttpClient) { }
  showAllLedgers() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllLedgers`, { headers, responseType: 'json' });

  }
  createLedgers(ledgers: Object): Observable<Object> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveLedgers`, ledgers, { headers, responseType: 'json' });

  }
  getAllBankLedgersOnly() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllBankLedgers`, { headers, responseType: 'json' });

  }
  getAllResidentialLedgersOnly() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllResidentLedgers`, { headers, responseType: 'json' });

  }
  getAllUserAndVendorLedgers() {
debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllUserAndVendorLedgers`, { headers, responseType: 'json' });

  }
  getLedgersExcpetMember() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllLedgersExcceptMemberLedger`, { headers, responseType: 'json' });

  }
  getBankLedgersOnly() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getBankAccountLedgers`, { headers, responseType: 'json' });

  }
  getAllCashLedgersOnly() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllCashLedgers`, { headers, responseType: 'json' });
  }
  updateLedgersById(ledgersId,ledgers: Object): Observable<Object>
	{
		console.log("I am in Update",ledgersId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateLedgersById/`+ledgersId,ledgers,{ headers, responseType: 'json' });	
  }
  showLedgersById(ledgersId):Observable<Ledgers> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Ledgers>(`${this.baseUrl}/getLedgersById/`+ledgersId,{ headers, responseType: 'json' });

  }
  deleteLedgersById(ledgersId) {
		const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteLedgersById/`+ledgersId,{ headers, responseType: 'json' });
  }
  getAllVendorsLedgers() {

        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(`${this.baseUrl}/getAllVendorsLedgers`, { headers, responseType: 'json' });
    
      }
}
