import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent {

}
