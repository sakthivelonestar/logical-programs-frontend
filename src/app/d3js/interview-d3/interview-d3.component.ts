import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interview-d3',
  standalone: true,
  imports: [CommonModule,MaximizeDirective],
  templateUrl: './interview-d3.component.html',
  styleUrl: './interview-d3.component.scss'
})
export class InterviewD3Component {

}
