import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Voucher } from '../interfaces/voucher';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import {ErrorObservable} from 'rxjs/Observable/ErrorObservable';
@Injectable({providedIn: 'root'})
export class VoucherEntryService {
  private baseUrl = 'http://localhost:8080/secured/voucherEntry';
  message: string;
  requests: Object;
  constructor(private http: HttpClient) { }

  getAllVoucherEntry():Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllVoucherEntry`, { headers, responseType: 'json' }).catch(this.handleError);

  }
  getAllLedgersWithPendingCheque() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllLedgersWithPendingCheque`, { headers, responseType: 'json' }).catch(this.handleError);

  }
  getAllBankLedgersOnly() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllBankLedgers`, { headers, responseType: 'json' }).catch(this.handleError);

  }

  getAllCashBookEntry() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllCashBook`, { headers, responseType: 'json' }).catch(this.handleError);

  }
  getCashRecieptAmount() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllCashAmount`, { headers, responseType: 'json' }).catch(this.handleError);

  }
  getAllBankBookEntry() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllBankBook`, { headers, responseType: 'json' }).catch(this.handleError);

  }
  getBankRecieptAmount() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllBankAmount`, { headers, responseType: 'json' }).catch(this.handleError);

  }
  getAllJournalBookEntry() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllJournalBook`, { headers, responseType: 'json' }).catch(this.handleError);

  }
 
  // getVoucherEntryById(voucherId):Observable<Voucher> {
    
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.get<Voucher>(`${this.baseUrl}/getVoucherEntryById/` + voucherId, { headers, responseType: 'json' });

  // }
  getVoucherEntryById(voucherId): Observable<Voucher> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Voucher>(`${this.baseUrl}/getVoucherEntryById/`+voucherId,{ headers, responseType: 'json' });

  }
  getVoucherLedgersChequeBounceById(voucherId) {
    debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllChequeBouce/` + voucherId, { headers, responseType: 'json' });

  }
 // this._http.getRequest().subscribe(res=>this.requests=res);
  getFrstCheckBounceWithByLedgersID(voucherId) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getFrstCheckBounceWithByLedgersID/` + voucherId, { headers, responseType: 'json' });

  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error:', errorResponse.error.message);
    window.alert(this.message = "You have got the Details!");
    }
    else {
      console.error('Server Side Error:', errorResponse);
      window.alert(this.message = "You have got the error!");
    }
    return new ErrorObservable();
  }
  deleteVoucherEntryById(voucherId) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteVoucherEntryById/` + voucherId, { headers, responseType: 'json' });
  }
  createVoucher(voucher: Object): Observable<Object> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveVoucherEntry`, voucher, { headers, responseType: 'json' });
  
  }
  updateVoucher(voucherId, voucher: Object): Observable<Object> {
    debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateVoucherEntryById/`+voucherId, voucher, { headers, responseType: 'json' });

  }
  updateChequeStatusToCleared(voucherId) {
    debugger;
    console.log("voucher id",voucherId)
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/updateChequeStatusToClear/` + voucherId, { headers, responseType: 'json' });
  }
  updateChequeStatusToBounce(voucherId) {
    debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/updateChequeStatusToBounce/` + voucherId, { headers, responseType: 'json' });
  }
  getAllStatementsOfAccountsById(voucherId) {
    debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllStatementsAccount/` + voucherId, { headers, responseType: 'json' });

  }
  getDepositeSlips(deposite: Object): Observable<Voucher> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<Voucher>(`${this.baseUrl}/getDepositeSlip`, deposite,{ headers, responseType: 'json' });
    
    }
    
  
 
}
