import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AllMemberComponent } from './component/member/all-member/all-member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToggleButtonModule, AllMemberComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PlayingRoomApp';
  test: string = 'ok';
  isClicked: boolean = false;

  public clicked(){
    this.isClicked ? this.isClicked = false : this.isClicked = true;   
  }
}
