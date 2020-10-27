import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StaffAndMemberAllocation} from '../interfaces/staffAndMemberAllocation'
@Injectable({
  providedIn: 'root'
})
export class StaffAndMemberAllocationService {
  private baseUrl = 'http://localhost:8080/secured/staffAndMemberAllocation';
  constructor(private http: HttpClient) { }
  createStaffAndMemberAllocation(staffAndMemberAllocation: Object): Observable<Object>{
   debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveStaffAndMemberAllocation`,staffAndMemberAllocation,{ headers, responseType: 'json' });
 
 }
  getAllStaffAndMemberAllocationList() {
   
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllStaffAndMemberAllocationList`,{ headers, responseType: 'json' });

  }
  
}
