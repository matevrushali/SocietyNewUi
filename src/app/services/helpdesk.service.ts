import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Helpdesk } from '../interfaces/helpdesk';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {
  private baseUrl = 'http://localhost:8080/secured/helpdesk';
  constructor(private http: HttpClient) { }


  showAllHelpdesk() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Helpdesk[]>(`${this.baseUrl}/getAllHelpdesk`,{ headers, responseType: 'json' });

  }
showHelpdeskById(helpdeskId): Observable<Helpdesk> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Helpdesk>(`${this.baseUrl}/getHelpdeskById/`+helpdeskId,{ headers, responseType: 'json' });

  }
  // getSocietyById(societyId):Observable<Society> {
	//   const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.get<Society>(`${this.baseUrl}/getSocietyDetailsById/`+societyId,{ headers, responseType: 'json' });

  // }

  createHelpdesk(helpdesk: Object): Observable<Object>{
    console.log("helpdesk :"+helpdesk); 
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveHelpdesk`,helpdesk,{ headers, responseType: 'json' });
 
 } 
 deleteHelpdeskById(helpdeskId) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.delete(`${this.baseUrl}/deleteHelpdeskById/`+helpdeskId,{ headers, responseType: 'json' });
}
updateHelpdesksById(helpdeskId,helpdesk: Object): Observable<Object>
	{
    debugger;
    console.log("I am in Update",helpdeskId);
    console.log("I am in Update",helpdesk);
    
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateHelpdeskById/`+helpdeskId,helpdesk,{ headers, responseType: 'json' });	
  }
  // updateSociety(societyId,society: Object): Observable<Object>{
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //    return this.http.put(`${this.baseUrl}/updateSocietyDetailsById/`+societyId,society,{ headers, responseType: 'json' });
 
  getCountOfPendingComplains() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Helpdesk[]>(`${this.baseUrl}/getCountOfPendingComplains`,{ headers, responseType: 'json' });

  }
  getCountOfOpenComplains() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Helpdesk[]>(`${this.baseUrl}/getCountOfOpenComplains`,{ headers, responseType: 'json' });

  }
  getCountOfInProgressComplains() {
	  	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Helpdesk[]>(`${this.baseUrl}/getCountOfInProgressComplaints`,{ headers, responseType: 'json' });

  }
  
  getCountOfRsolvedComplaints() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.get<Helpdesk[]>(`${this.baseUrl}/getCountOfRsolvedComplaints`,{ headers, responseType: 'json' });

}
getCountOfHoldComplaints() {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.get<Helpdesk[]>(`${this.baseUrl}/getCountOfHoldComplaints`,{ headers, responseType: 'json' });

}
getCountOfCancelledComplaints() {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.get<Helpdesk[]>(`${this.baseUrl}/getCountOfCancelledComplaints`,{ headers, responseType: 'json' });

}
}