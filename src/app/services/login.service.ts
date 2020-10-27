import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersFormDetails } from '../interfaces/userFormDetails';
import { PrivilegesService } from '../services/privileges.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/secured/usersFormDetails';
  
  constructor(private http: HttpClient,private privilegService:PrivilegesService) { }

 
checkAuthentication(loginDetails: Object): Observable<UsersFormDetails> {

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.post<UsersFormDetails>(`${this.baseUrl}/getCheckAuthentication`, loginDetails,{ headers, responseType: 'json' });

}
forgetPassword(userName:string): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/forgotPassword`,userName,{ headers, responseType: 'json' });
 
 } 


//nIKHILD : Start OAUth2 methods
obtainAccessToken(loginData): Observable<any>{
  let params = new URLSearchParams();
  params.append('username',loginData.mobileNumber);
  params.append('password',loginData.password);    
  params.append('grant_type','password');
  const headers = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic '+btoa("spring-security-oauth2-read-write-client:spring-security-oauth2-read-write-client-password1234"));
  
  return this.http.post(`http://localhost:8080/oauth/token`, params.toString(), { headers});//.catch(this.errorHandler)
}

logoutUser() {
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.post(`http://localhost:8080/secured/endPoint/oauth/revoke-token`,{ headers, responseType: 'json' });
  
  }
//nIKHILD : End OAUth2 methods
errorHandler(error: HttpErrorResponse) {
  debugger
  console.log("Erro code",error.status)
  console.log("Erro code",error.statusText)
 if(error.status==401){
alert("User is unauthorized");
 }
 else if(error.status==400){
 alert("Internal Server Error");
}
  return Observable.throw(error.message||"Server Error");
}
}
