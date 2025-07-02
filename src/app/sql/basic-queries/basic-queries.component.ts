import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-basic-queries',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './basic-queries.component.html',
  styleUrl: './basic-queries.component.scss'
})
export class BasicQueriesComponent {

}
