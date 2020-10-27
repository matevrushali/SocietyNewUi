import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { UsersFormDetails } from '../interfaces/userFormDetails';

@Injectable({
  providedIn: 'root'
})
export class UsersFormService {
  private baseUrl = 'http://localhost:8080/secured/usersFormDetails';
 
  
  constructor(private http: HttpClient) { }
  getAllUsersFormDetails() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllUsersFormDetails`, { headers, responseType: 'json' });//.catch(this.errorHandler);

  }
  createUsersFormDetails(usersFormDetails: Object): Observable<Object> {
  // const invocation = new XMLHttpRequest();
  // invocation.setRequestHeader('Content-Type', 'application/xml');
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveUsersFormDetails/`,usersFormDetails, { headers, responseType: 'json' });

  }
  
 
  getUsersFormDetailsDetailsById(usersFormId):Observable<UsersFormDetails> {
   // console.log("I am in Get By Id", usersFormId);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<UsersFormDetails>(`${this.baseUrl}/getUsersFormDetailsById/`+usersFormId, { headers, responseType: 'json' });

  }
  getUsersFormDetailsDetailsByFlatId(usersFormId):Observable<UsersFormDetails> {
    debugger;
     const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.get<UsersFormDetails>(`${this.baseUrl}/getUsersFormDetailsByFlatId/`+usersFormId, { headers, responseType: 'json' });
 
   }
  deleteUsersFormDetailsDetailsById(usersFormId) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteUsersFormDetailsById/` + usersFormId, { headers, responseType: 'json' });
  }
  
  updateUsersFormDetails(usersFormId, usersFormDetails: Object): Observable<Object> {
    debugger;
    console.log("I am in Update", usersFormId);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put(`${this.baseUrl}/updateUsersFormDetailsById/`+usersFormId,usersFormDetails, { headers, responseType: 'json' });
    console.log("I am in ...Update", usersFormId);
  }
  
  getCountOfOwnerTenant() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getCountOfOwnerTenant`, { headers, responseType: 'json' });

  }
  getAllTenantListDetails() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllTenantList`, { headers, responseType: 'json' });

  }
  errorHandler(error: HttpErrorResponse) {
    debugger
    console.log("Erro code",error.status)
    console.log("Erro code",error.statusText)
   if(error.status==404){
  alert("Not Found");
   }
   else if(error.status==400){
   alert("Internal Server Error");
  }
    return Observable.throw(error.message||"Server Error");
  }


  //for current outstanding
  // getCurrentOutstandingForAllUsersFormDetails() {
  //   debugger;
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.get(`${this.baseUrl}/getCurrentOutstandingForAllUsersFormDetails`, { headers, responseType: 'json' });//.catch(this.errorHandler);

  // }
  importResidentDetails(){
	
	  
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/ImportResidentDetails`,{ headers, responseType: 'json' });
 
 } 
}
