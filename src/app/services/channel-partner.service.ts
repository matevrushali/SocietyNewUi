import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChannelPartner } from '../interfaces/channelPartner';
@Injectable({
  providedIn: 'root'
})
export class ChannelPartnerService {
private baseUrl = 'http://localhost:8080/secured/channelPartnerDetails';
  constructor(private http: HttpClient) { }
  
  getAllChannelPartner() {
	  
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllChannelPartnerDetails`,{ headers, responseType: 'json' });

  }
  
  getChannelPartnerDetailsById(channelPartnerId):Observable<ChannelPartner> {

	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<ChannelPartner>(`${this.baseUrl}/getChannelPartnerDetailsById/`+channelPartnerId,{ headers, responseType: 'json' });

  }
  
  deleteChannelPartnerDetailsById(channelPartnerId) {
		const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteChannelPartnerDetailsById/`+channelPartnerId,{ headers, responseType: 'json' });
  }
  createChannelPartner(channel: Object): Observable<Object>{
    
	 const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveChannelPartnerDetails`,channel,{ headers, responseType: 'json' });

}

updateChannelPartnerDetails(channelPartnerId,channel: Object): Observable<Object>
	{
    debugger;
		console.log("I am in Update",channelPartnerId);
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/updateChannelPartnerDetailsById/`+channelPartnerId,channel,{ headers, responseType: 'json' });	
  }
  softDeleteChannelPartner(channelPartnerId,channel: Object): Observable<Object>
	{
		
	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.put(`${this.baseUrl}/deleteChannelPartner/`+channelPartnerId,channel,{ headers, responseType: 'json' });	
  } 
  
}
