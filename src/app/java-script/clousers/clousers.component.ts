import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-clousers',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './clousers.component.html',
  styleUrl: './clousers.component.scss'
})
export class ClousersComponent {

}
