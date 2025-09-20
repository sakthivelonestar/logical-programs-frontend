import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-routing-guards',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './routing-guards.component.html',
  styleUrl: './routing-guards.component.scss'
})
export class RoutingGuardsComponent {

}
