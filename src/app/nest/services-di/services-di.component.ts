import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-services-di',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './services-di.component.html',
  styleUrl: './services-di.component.scss'
})
export class ServicesDiComponent {

}
