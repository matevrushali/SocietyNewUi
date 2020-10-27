import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occupancy } from '../interfaces/occupancy';
// import * as XLSX from 'xlsx';
// import * as FileSaver from 'file-saver';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class OccupancyService {
private baseUrl = 'http://localhost:8080/secured/occupancyDetails';
  constructor(private http: HttpClient) { }
   getOccupancy() :Observable<Occupancy>{
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Occupancy>(`${this.baseUrl}/getAllUsersOccupancyDetails`,{ headers, responseType: 'json' });

  }
  getDistinctBlockTower(){
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getDistinctBlock`,{ headers, responseType: 'json' });

  }
  getOccupancyDetailsById(occupancyDetailsId):Observable<Occupancy> {
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Occupancy>(`${this.baseUrl}/getUsersOccupancyDetailsById/`+occupancyDetailsId,{ headers, responseType: 'json' });

  }
  createOccupancy(occupancy: Object): Observable<Object>{
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveUsersOccupancyDetails`,occupancy,{ headers, responseType: 'json' });

}
    
  deleteOccupancy(occupancyDetailsId) {
		const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteUsersOccupancyDetailsById/`+occupancyDetailsId,{ headers, responseType: 'json' });
  }
  updateOccupancy(occupancyDetailsId,occupancy: Object): Observable<Object>
{
  debugger;
  
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateUsersOccupancyDetailsById/`+occupancyDetailsId,occupancy,{ headers, responseType: 'json' });

}

getCountOfSoldUnsold() {
	  
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(`${this.baseUrl}/getCountOfSoldUnsoldUnit`,{ headers, responseType: 'json' });

}importUnitDetails(){
	
	  
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
   return this.http.post(`${this.baseUrl}/ImportUnitDetails`,{ headers, responseType: 'json' });

} 
getUnitDetailsAgainstBillHeadById(occupancyDetailsId):Observable<Occupancy> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get<Occupancy>(`${this.baseUrl}/getUnitDetailsAgainstBillHead/`+occupancyDetailsId,{ headers, responseType: 'json' });

}
}
