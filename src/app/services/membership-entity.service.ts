import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {MembershipEntity} from '../interfaces/membershipEntity'
@Injectable({
  providedIn: 'root'
})
export class MembershipEntityService {

  private baseUrl = 'http://localhost:8080/secured/membershipEntity';
  constructor(private http: HttpClient) { }
  createMembershipEntity(membershipEntity: Object): Observable<Object>{
   debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveMembershipEntity`,membershipEntity,{ headers, responseType: 'json' });
 
 }
 getAllMembershipEntities() {

  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get(`${this.baseUrl}/getAllMembershipEntity`, { headers, responseType: 'json' });//.catch(this.errorHandler);

}
getMembershipEntityDetailsById(id):Observable<MembershipEntity> {
   
  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  return this.http.get<MembershipEntity>(`${this.baseUrl}/getMembershipEntityById/`+id,{ headers, responseType: 'json' });

}
}
