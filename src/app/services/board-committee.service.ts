import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BoardCommittee} from '../interfaces/boardCommittee'
@Injectable({
  providedIn: 'root'
})
export class BoardCommitteeService {
  private baseUrl = 'http://localhost:8080/secured/boardCommittee';
  constructor(private http: HttpClient) { }
  createBoardCommittee(boardCommittee: Object): Observable<Object>{
   
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post(`${this.baseUrl}/saveBoardCommittee`,boardCommittee,{ headers, responseType: 'json' });
 
 }
  getAllBoardCommittee() {
   
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllBoardCommitteeList`,{ headers, responseType: 'json' });

  }
  getBoardCommitteeById(boardCommitteeId):Observable<BoardCommittee> {
   
	  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<BoardCommittee>(`${this.baseUrl}/getBoardCommitteeById/`+boardCommitteeId,{ headers, responseType: 'json' });

  }
  
}
