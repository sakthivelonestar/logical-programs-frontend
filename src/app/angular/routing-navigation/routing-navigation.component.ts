import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-routing-navigation',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './routing-navigation.component.html',
  styleUrl: './routing-navigation.component.scss'
})
export class RoutingNavigationComponent {

}
