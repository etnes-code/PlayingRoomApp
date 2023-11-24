import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'https://api.example.com/members';

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]> {
    return this.generateFakeMembers(10);
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



    // ...

    generateFakeMembers(numMembers: number): Observable<Member[]> {
      let fakeMembers: Member[] = [];

      for (let i = 0; i < numMembers; i++) {
        const id = (i + 1).toString();
        const lastName = `Member ${id} last name`;
        const firstName = `Member ${id} first name`;
        const email = `member${id}@example.com`;
        const konamiId = `member${id}`;
        const createDate = new Date();

        const member = new Member(id, lastName, firstName, email, konamiId, createDate);
        fakeMembers.push(member);
      }

      return of(fakeMembers);

    }

  }

  



