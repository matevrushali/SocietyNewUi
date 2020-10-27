import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendors } from '../interfaces/vendors';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
providedIn: 'root'
})
export class VendorsService {
private baseUrl = 'http://localhost:8080/secured/vendors';
constructor(private http: HttpClient) { }

getVendors() {

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.get(`${this.baseUrl}/getAllVendors`,{ headers, responseType: 'json' });

}
getVendorsById(vendorId):Observable<Vendors> {
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.get<Vendors>(`${this.baseUrl}/getVendorsById/`+vendorId,{ headers, responseType: 'json' });

}
deleteVendor(vendorId): Observable<any>
{
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
return this.http.delete(`${this.baseUrl}/deleteVendorsById/`+vendorId,{ headers, responseType: 'json' })
.catch(this.errorHandler)
;	
}
createVendors(vendors: Object): Observable<Object>{

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
console.log("mesg: "+vendors.toString);
return this.http.post(`${this.baseUrl}/saveVendors`,vendors,{ headers, responseType: 'json' });
}
updateVendorById(vendorId,vendorUpdate: Object): Observable<Object>
{

console.log("I am in Update",vendorId);
const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
console.log("Mesg:"+vendorUpdate.toString);
return this.http.post(`${this.baseUrl}/updateVendorsById/`+vendorId,vendorUpdate,{ headers, responseType: 'json' });	
}

errorHandler(error: HttpErrorResponse){
return Observable.throw(error.message|| 'Server Error');
}
}