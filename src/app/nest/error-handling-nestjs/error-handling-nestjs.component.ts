import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-error-handling-nestjs',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './error-handling-nestjs.component.html',
  styleUrl: './error-handling-nestjs.component.scss'
})
export class ErrorHandlingNestjsComponent {

}
