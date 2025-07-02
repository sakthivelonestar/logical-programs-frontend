import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-data-type',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './data-type.component.html',
  styleUrl: './data-type.component.scss'
})
export class DataTypeComponent {

}
