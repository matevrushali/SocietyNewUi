import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Privileges } from '../interfaces/privileges';


@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {
  private baseUrl = 'http://localhost:8080/secured/privileges';
  constructor(private http: HttpClient) { }
 
  showAllPrivileges():Observable<Privileges>  {
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Privileges>(`${this.baseUrl}/getAllPrivileges`,{ headers, responseType: 'json' });

  }
showPrivilegesById(privilegeId):Observable<Privileges> {
  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Privileges>(`${this.baseUrl}/getPrivilegesById/`+privilegeId,{ headers, responseType: 'json' });

  }
  deletePrivilegesById(privilegeId) {
		const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deletePrivilegesById/`+privilegeId,{ headers, responseType: 'json' });
  }
  
  
  createPrivileges(privilegesDetails: Object): Observable<Object>{
	 // console.log(channel partner : channel);
   
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/savePrivileges`,privilegesDetails,{ headers, responseType: 'json' });

} 
updatePrivilegesById(privilegeId,privilegesDetails: Object): Observable<Object>
	{
    debugger
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updatePrivilegesById/`+privilegeId,privilegesDetails,{ headers, responseType: 'json' });	
	} 

  getPrivilegeByRoleId() {
    debugger
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getPrivilegeByRoleId/`, { headers, responseType: 'json' });
  }

  getPrivilegesOfLoggedInUser() {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(`${this.baseUrl}/getPrivilegeByRoleId/`, { headers, responseType: 'json' });
  }
}

