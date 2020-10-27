import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AmemitiesNew } from '../interfaces/amenitiesNew';
@Injectable({
  providedIn: 'root'
})
export class AmenitiesnewService {
  private baseUrl = 'http://localhost:8080/secured/amenitiesNew';
  constructor(private http: HttpClient) { }
  createAmenities(newAmeneities: Object): Observable<Object>{
   
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveAmenitiesNew`,newAmeneities,{ headers, responseType: 'json' });
 
 }
  getAllAmenitiesNew() {
   
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllAmenitiesNew`,{ headers, responseType: 'json' });

  }
  getAmenitiesNewById(amenitiesId):Observable<AmemitiesNew> {
   
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<AmemitiesNew>(`${this.baseUrl}/getAmenitiesNewById/`+amenitiesId,{ headers, responseType: 'json' });

  }
  
}
