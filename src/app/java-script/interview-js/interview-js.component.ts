import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-interview-js',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './interview-js.component.html',
  styleUrl: './interview-js.component.scss'
})
export class InterviewJsComponent {

}
