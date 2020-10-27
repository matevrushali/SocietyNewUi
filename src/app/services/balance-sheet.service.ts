import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BalanceSheetService {
  private baseUrl = 'http://localhost:8080/secured/balanceSheet';
  constructor(private http: HttpClient) { }

  getAllLiabilityBalanceSheet() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getLiabilityBalanceSheet`,{ headers, responseType: 'json' });

  }
  getAllAssetsBalanceSheet() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAssetsBalanceSheet`,{ headers, responseType: 'json' });

  }
  getBalanceSheetDetails(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getBalanceSheet`,{ headers, responseType: 'json' });

  }
  getProfitAndLossSheetDetails(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getProfitAndLossSheet`,{ headers, responseType: 'json' });

  }
  getTrialBalanceSheetDetails(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getTrialBalanceSheet`,{ headers, responseType: 'json' });

  }
  getTrialBalanceSheetDetailsSlot2(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getTrialBalanceSheetSlot2`,{ headers, responseType: 'json' });

  }
  getBalanceSheetDetailsSlot2(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getBalanceSheetSlot2`,{ headers, responseType: 'json' });

  }
  getProfitLossDetailsSlot2(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getProfitAndLossSheetSlot2`,{ headers, responseType: 'json' });

  }
 
}
