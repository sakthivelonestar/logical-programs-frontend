import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-database-integration',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './database-integration.component.html',
  styleUrl: './database-integration.component.scss'
})
export class DatabaseIntegrationComponent {

}
