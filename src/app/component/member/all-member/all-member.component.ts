import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Member } from '../../../core/models/member';

@Component({
  selector: 'app-all-member',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './all-member.component.html',
  styleUrl: './all-member.component.scss'
})
export class AllMemberComponent {

  members : Member[] = [];
  /**
   *
   */
  constructor() {
  
    
  }

}
