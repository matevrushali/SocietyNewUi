import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Society } from '../interfaces/society';
@Injectable({
  providedIn: 'root'
})
export class SocietyService {
private baseUrl = 'http://localhost:8080/secured/societyDetails';
  constructor(private http: HttpClient) { }
    getSociety():Observable<Society> {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Society>(`${this.baseUrl}/getAllSocietyDetails`,{ headers, responseType: 'json' });

  }
  
  getSocietyById(societyId):Observable<Society> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Society>(`${this.baseUrl}/getSocietyDetailsById/`+societyId,{ headers, responseType: 'json' });

  }
    deleteSocietyById(societyId)
  {
			const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
			return this.http.delete(`${this.baseUrl}/deleteSocietyDetailsById/`+societyId,{ headers, responseType: 'json' });	
  }
  createSociety(society: Object): Observable<Object>{
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveSocietyDetails`,society,{ headers, responseType: 'json' });

}

updateSociety(societyId,society: Object): Observable<Object>{
  console.log("update Society: ",society);
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateSocietyDetailsById/`+societyId,society,{ headers, responseType: 'json' });

}
}
