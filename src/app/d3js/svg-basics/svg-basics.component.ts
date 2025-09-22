import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-svg-basics',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './svg-basics.component.html',
  styleUrl: './svg-basics.component.scss'
})
export class SvgBasicsComponent {
  

}
