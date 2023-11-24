import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Member } from '../../../core/models/member';
import { MemberService } from '../../../core/services/member.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-all-member',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CommonModule],
  templateUrl: './all-member.component.html',
  styleUrl: './all-member.component.scss'
})
export class AllMemberComponent {

  public members : Member[] = [];
  public selectedMember!: Member ; //change init wth real data
  loading: boolean = true;
  /**
   *
   */
  constructor() {
    this.members = this.generateFakeMembers(100);
    
  }
  clear(table: Table) {
    table.clear();
}

  generateFakeMembers(numMembers: number): Member[] {
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

    return fakeMembers;

  }

}
