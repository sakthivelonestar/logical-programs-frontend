import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-custom-decorators',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './custom-decorators.component.html',
  styleUrl: './custom-decorators.component.scss'
})
export class CustomDecoratorsComponent {

}
