import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-indexing',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './indexing.component.html',
  styleUrl: './indexing.component.scss'
})
export class IndexingComponent {

}
