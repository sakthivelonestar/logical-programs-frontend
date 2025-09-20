import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss'
})
export class ComponentCommunicationComponent {



}
