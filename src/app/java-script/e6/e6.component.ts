import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-e6',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './e6.component.html',
  styleUrl: './e6.component.scss'
})
export class E6Component {

}
