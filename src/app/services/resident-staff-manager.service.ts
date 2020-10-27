import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ResidentStaffManager} from '../interfaces/residentstaffManager'
@Injectable({
  providedIn: 'root'
})

export class ResidentStaffManagerService {
  private baseUrl = 'http://localhost:8080/secured/residentStaffManager';
  constructor(private http: HttpClient) { }
  showAllResidentStaffManager():Observable<ResidentStaffManager[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.get<ResidentStaffManager[]>(`${this.baseUrl}/getAllResidentStaffManager`,{ headers, responseType: 'json' });
 
 }
 showAllMaidStaffManager(){
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
   return this.http.get(`${this.baseUrl}/getAllMaidStaffList`,{ headers, responseType: 'json' });

}
 
  showResidentStaffManagerById(residentStaffId):Observable<ResidentStaffManager> {
     const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.get<ResidentStaffManager>(`${this.baseUrl}/getResidentStaffManagerById/`+residentStaffId,{ headers, responseType: 'json' });
 
   }
   createResidentStaffManager(residentStaffManager: Object): Observable<Object>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveResidentStaffManager`,residentStaffManager,{ headers, responseType: 'json' });
  
  }
   
  updateResidentStaffManagerById(residentStaffId,residentStaffManager: Object): Observable<Object>
    {
      console.log("I am in Update",residentStaffId);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.put(`${this.baseUrl}/updateResidentStaffManagerById/`+residentStaffId,residentStaffManager,{ headers, responseType: 'json' });	
    } 
    deleteResidentStaffManagerById(residentStaffId) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete(`${this.baseUrl}/deleteResidentStaffManagerById/`+residentStaffId,{ headers, responseType: 'json' });
  
    }

    getResidentStaffInfo(residentStaffId) {
      debugger;
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getResidentStaffInfo/` + residentStaffId, { headers, responseType: 'json' });
  
    }
}
