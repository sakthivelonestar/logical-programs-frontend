import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-state-management-basics',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './state-management-basics.component.html',
  styleUrl: './state-management-basics.component.scss'
})
export class StateManagementBasicsComponent {

}
