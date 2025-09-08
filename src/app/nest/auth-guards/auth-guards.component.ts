import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-auth-guards',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './auth-guards.component.html',
  styleUrl: './auth-guards.component.scss'
})
export class AuthGuardsComponent {

}
