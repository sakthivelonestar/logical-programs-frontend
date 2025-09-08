import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';


@Component({
  selector: 'app-dto-validation',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './dto-validation.component.html',
  styleUrl: './dto-validation.component.scss'
})
export class DtoValidationComponent {

}
