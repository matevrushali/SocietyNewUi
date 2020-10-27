import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TenantManager} from '../interfaces/tenantMovement'
@Injectable({
  providedIn: 'root'
})
export class TenantManagerService {

  private baseUrl = 'http://localhost:8080/secured/tenantManager';
  constructor(private http: HttpClient) { }
  saveTenantManager(tenant_manager: Object): Observable<Object>{
   
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveTenantManager`,tenant_manager,{ headers, responseType: 'json' });
 
 }
}
