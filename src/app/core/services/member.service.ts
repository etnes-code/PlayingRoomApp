import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'https://api.example.com/members';

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMemberById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createMember(member: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, member);
  }

  updateMember(id: number, member: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, member);
  }

  deleteMember(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

  



