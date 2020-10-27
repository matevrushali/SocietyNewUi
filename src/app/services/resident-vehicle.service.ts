import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResidentVehicle } from '../interfaces/residentVehicle';
@Injectable({
  providedIn: 'root'
})
export class ResidentVehicleService {
  private baseUrl = 'http://localhost:8080/secured/residentVehicle';
  constructor(private http: HttpClient) { }
  showAllResidentVehicle() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllResidentVehicle`,{ headers, responseType: 'json' });

  }
  showResidentVehicleById(residentVehicleId):Observable<ResidentVehicle> {
    debugger;
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<ResidentVehicle>(`${this.baseUrl}/getResidentVehicleById/`+residentVehicleId,{ headers, responseType: 'json' });

  }
 
   createResidentVehicle(residentVehicle: Object): Observable<Object>{
	  console.log(residentVehicle);
	  
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveResidentVehicle`,residentVehicle,{ headers, responseType: 'json' });

}
updateResidentVehicleById(residentVehicleId,residentVehicle: Object): Observable<Object>
	{
		console.log("I am in Update",residentVehicleId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateResidentVehicleById/`+residentVehicleId,residentVehicle,{ headers, responseType: 'json' });	
	} 
	deleteResidentVehicleById(residentVehicleId) {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteResidentVehicleById/`+residentVehicleId,{ headers, responseType: 'json' });

  }
  // deleteResidentVehicle(residentVehicleId, residentVehicle: Object): Observable<Object> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.put(`${this.baseUrl}/deleteResidentVehicle/` + residentVehicleId, residentVehicle, { headers, responseType: 'json' });
  // }
}
