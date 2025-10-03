import {  Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logger-f-b',
  standalone: true,
  imports: [CommonModule,MaximizeDirective],
  templateUrl: './logger-f-b.component.html',
  styleUrl: './logger-f-b.component.scss'
})
export class LoggerFBComponent {


  copyCode(element: HTMLElement, tooltip: HTMLElement) {
    const codeText = element.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 1500);
    });
  }

}
