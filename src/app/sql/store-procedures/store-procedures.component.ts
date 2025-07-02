import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-store-procedures',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './store-procedures.component.html',
  styleUrl: './store-procedures.component.scss'
})
export class StoreProceduresComponent {

}
