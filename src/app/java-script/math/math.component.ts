import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent {

}
