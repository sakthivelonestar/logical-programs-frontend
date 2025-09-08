import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-interceptors-pipes',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './interceptors-pipes.component.html',
  styleUrl: './interceptors-pipes.component.scss'
})
export class InterceptorsPipesComponent {

}
