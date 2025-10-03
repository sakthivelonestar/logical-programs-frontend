import {  Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule,MaximizeDirective],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {

     copyCode(element: HTMLElement, tooltip: HTMLElement) {
    const codeText = element.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 1500);
    });
  }

}
