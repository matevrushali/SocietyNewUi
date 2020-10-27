import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from '../interfaces/parking';
// import * as XLSX from 'xlsx';
//import * as FileSaver from 'file-saver';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
private baseUrl = 'http://localhost:8080/secured/parkingDetails';
  
  constructor(private http: HttpClient) { }
  
   showAllParking() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllParkingDetails`,{ headers, responseType: 'json' });

  }

  showAllAvailableParkings() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllAvailableParkings`,{ headers, responseType: 'json' });

  }

  showparkingById(parkingId):Observable<Parking> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Parking>(`${this.baseUrl}/getParkingDetailsById/`+parkingId,{ headers, responseType: 'json' });

  }
  deleteParkingById(parkingId) {
    debugger;
		const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteParkingDetailsById/`+parkingId,{ headers, responseType: 'json' });
  }
 createParking(parking: Object): Observable<Object>{
	
	  
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveParkingDetails`,parking,{ headers, responseType: 'json' });

} 
updateParkingById(parkingId,parking:Object):Observable<Object>
	{
  
	
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateParkingDetailsById/`+parkingId,parking,{ headers, responseType: 'json' });	
  }
  
  importParking(formData : FormData ):Observable<Object>
	{  	
    const headers = new HttpHeaders().set('Content-Type',  'multipart/form-data; boundary=something; charset=utf-8');  
    return this.http.post(`${this.baseUrl}/importParkingDetails`, formData,{ headers, responseType: 'json' });
  }
  
  importParkingDetails(){
	
	  
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/ImportParking`,{ headers, responseType: 'json' });
 
 } 
 getCountOfVaialParkingSlots(){
	
	  
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
   return this.http.get(`${this.baseUrl}/getCountOfAllAvailableParking`,{ headers, responseType: 'json' });

} 

  
  
  
}
