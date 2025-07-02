import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-filtering-sorting',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './filtering-sorting.component.html',
  styleUrl: './filtering-sorting.component.scss'
})
export class FilteringSortingComponent {

}
