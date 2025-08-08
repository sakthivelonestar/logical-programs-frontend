import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-nestjs-setup',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './nestjs-setup.component.html',
  styleUrl: './nestjs-setup.component.scss'
})
export class NestjsSetupComponent {

}
