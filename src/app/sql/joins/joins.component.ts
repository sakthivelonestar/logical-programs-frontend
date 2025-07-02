import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-joins',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './joins.component.html',
  styleUrl: './joins.component.scss'
})
export class JoinsComponent {

}
