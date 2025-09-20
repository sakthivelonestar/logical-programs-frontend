import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-string-methods',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './string-methods.component.html',
  styleUrl: './string-methods.component.scss'
})
export class StringMethodsComponent {

}
