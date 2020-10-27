import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notice } from '../interfaces/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeManagerService {
  private baseUrl = 'http://localhost:8080/secured/noticeManager';
  constructor(private http: HttpClient) { }

  showAllNoticeManage() {

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllNoticeManager`, { headers, responseType: 'json' });

  }
  createNoticeManager(notice: Notice): Observable<Notice> {
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Notice>(`${this.baseUrl}/saveNoticeManager`, notice, { headers, responseType: 'json' });

  }
  showNoticeManagerById(noticeManagerId):Observable<Notice> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Notice>(`${this.baseUrl}/getNoticeManagerById/` + noticeManagerId, { headers, responseType: 'json' });

  }
  deleteNoticeManagerById(noticeManagerId) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteNoticeManagerById/` + noticeManagerId, { headers, responseType: 'json' });
  }

  updateNoticeManagerById(noticeManagerId, notice: Object): Observable<Object> {
    debugger;
    console.log("I am in updateNoticeManagerById Service ");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateNoticeManagerById/` + noticeManagerId, notice, { headers, responseType: 'json' });
  }

}
