import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscalationMatrix } from '../interfaces/escalationMatrix';
@Injectable({
  providedIn: 'root'
})
export class EscalationMatrixService {
  private baseUrl = 'http://localhost:8080/secured/escalationMatrix';
  constructor(private http: HttpClient) { }

  showAllEscalationMatrixt() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllEscalationMatrix`,{ headers, responseType: 'json' });

  }
  showEscalationMatrixtById(escalationMatixId):Observable<EscalationMatrix>  {
    debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<EscalationMatrix>(`${this.baseUrl}/getEscalationMatrixById/`+escalationMatixId,{ headers, responseType: 'json' });

  }
  createEscalationMatrixt(escalationMatrix: Object): Observable<Object>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveEscalationMatrix`,escalationMatrix,{ headers, responseType: 'json' });
 
 }
 updateEscalationMatrixById(escalationMatixId,escalationMatrix: Object): Observable<Object>
	{
    debugger;
		console.log("I am in Update",escalationMatixId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateEscalationMatrixById/`+escalationMatixId,escalationMatrix,{ headers, responseType: 'json' });	

}
  deleteEscalationMatrixtById(escalationMatixId) {
		const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteEscalationMatrixById/`+escalationMatixId,{ headers, responseType: 'json' });
  }
  getCategoryFromEscalation() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getCategory`,{ headers, responseType: 'json' });

  }
  getOthersSubCategory() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getOthersSubCategory`,{ headers, responseType: 'json' });

  }
  getApartmentSubCategory() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getApartmentSubCategory`,{ headers, responseType: 'json' });

  }
  getCommonAreaNonTowerSubCategory() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getCommonAreaNonTowerSubCategory`,{ headers, responseType: 'json' });

  }
  getCommonAreaTowerSubCategory() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getCommonAreaTowerSubCategory`,{ headers, responseType: 'json' });

  }
  

}
