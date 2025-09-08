import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-middleware-nestjs',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './middleware-nestjs.component.html',
  styleUrl: './middleware-nestjs.component.scss'
})
export class MiddlewareNestjsComponent {

}
