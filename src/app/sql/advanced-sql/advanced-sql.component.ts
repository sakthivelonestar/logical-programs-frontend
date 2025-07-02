import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-sql',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './advanced-sql.component.html',
  styleUrl: './advanced-sql.component.scss'
})
export class AdvancedSqlComponent {

}
