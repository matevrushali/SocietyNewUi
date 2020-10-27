import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StaffManager} from '../interfaces/staffManager'
@Injectable({
  providedIn: 'root'
})
export class StaffManagerService {
private baseUrl = 'http://localhost:8080/secured/staffManager';
  constructor(private http: HttpClient) { }
 showAllStaffManager(){
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllStaffManager`,{ headers, responseType: 'json' });

}
 showStaffManagerById(staffManagerId):Observable<StaffManager> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<StaffManager>(`${this.baseUrl}/getStaffManagerById/`+staffManagerId,{ headers, responseType: 'json' });

  }
  createStaffManager(staffManager: Object): Observable<Object>{
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
   return this.http.post(`${this.baseUrl}/saveStaffManager`,staffManager,{ headers, responseType: 'json' });

}
 
updateStaffManagerById(staffManagerId,staffManager: Object): Observable<Object>
	{
		console.log("I am in Update",staffManagerId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateStaffManagerById/`+staffManagerId,staffManager,{ headers, responseType: 'json' });	
	} 
	deleteStaffManagerById(staffManagerId) {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteStaffManagerById/`+staffManagerId,{ headers, responseType: 'json' });

	}
	
} 