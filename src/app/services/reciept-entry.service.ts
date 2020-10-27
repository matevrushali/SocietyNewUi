import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecieptEntry } from '../interfaces/recieptEntry';

@Injectable({
  providedIn: 'root'
})
export class RecieptEntryService {
  private baseUrl = 'http://localhost:8080/secured/recieptEntry';
  constructor(private http: HttpClient) { }
  updateRecieptById(generateBillsId,generateBill: Object): Observable<Object>
	{
	debugger;
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateRecieptEntry/`+generateBillsId,generateBill,{ headers, responseType: 'json' });	
  }
getRecieptListByBill(generateBillsId): Observable<RecieptEntry>
	{

	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.get<RecieptEntry>(`${this.baseUrl}/getAllrecieptEntries/`+generateBillsId,{ headers, responseType: 'json' });	
  }
  saveRecieptentry(recieptBill: Object): Observable<Object>
	{
	debugger;
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.post(`${this.baseUrl}/saveRecieptEntry/`,recieptBill,{ headers, responseType: 'json' });	
  }
}
