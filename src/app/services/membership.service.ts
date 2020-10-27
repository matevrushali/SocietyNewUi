import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membership } from '../interfaces/membership';
@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private baseUrl = 'http://localhost:8080/secured/membership';
  constructor(private http: HttpClient) { }
  createMembership(membership: Object): Observable<Object> {
    debugger;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/saveMembership`, membership, { headers, responseType: 'json' });

  }
}
