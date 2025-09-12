import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-angular-architecture',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './angular-architecture.component.html',
  styleUrl: './angular-architecture.component.scss'
})
export class AngularArchitectureComponent {

}
