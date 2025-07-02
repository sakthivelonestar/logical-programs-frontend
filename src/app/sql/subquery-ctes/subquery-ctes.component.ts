import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-subquery-ctes',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './subquery-ctes.component.html',
  styleUrl: './subquery-ctes.component.scss'
})
export class SubqueryCtesComponent {

}
