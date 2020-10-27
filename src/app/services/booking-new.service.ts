import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingNew } from '../interfaces/bookingNew';

@Injectable({
  providedIn: 'root'
})
export class BookingNewService {
  private baseUrl = 'http://localhost:8080/secured/bookingNew';
  constructor(private http: HttpClient) { }
  createBooking(booking: Object): Observable<Object>{
 
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveBookingNew`,booking,{ headers, responseType: 'json' });
 
 }
 getBookingsDetailsAmenitiesyId(amenitiesId):Observable<BookingNew> {
   
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get<BookingNew>(`${this.baseUrl}/getBookingsDetailsAmenitiesyId/`+amenitiesId,{ headers, responseType: 'json' });

}

getBookingSchedule(bookingDetails){
  debugger;
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/getBookingSchedule`,bookingDetails,{ headers, responseType: 'json' });
    
}

}
