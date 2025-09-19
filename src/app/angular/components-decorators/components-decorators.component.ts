import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-components-decorators',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './components-decorators.component.html',
  styleUrl: './components-decorators.component.scss'
})
export class ComponentsDecoratorsComponent {

}
