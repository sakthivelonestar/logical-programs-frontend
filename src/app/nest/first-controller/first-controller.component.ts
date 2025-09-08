import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaximizeDirective } from '../../directives/maximize.directive';


@Component({
  selector: 'app-first-controller',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './first-controller.component.html',
  styleUrl: './first-controller.component.scss'
})
export class FirstControllerComponent {

}
