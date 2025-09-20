import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-prototypes',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './prototypes.component.html',
  styleUrl: './prototypes.component.scss'
})
export class PrototypesComponent {

}
