import {  Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swager',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './swager.component.html',
  styleUrl: './swager.component.scss'
})
export class SwagerComponent {

 copyCode(element: HTMLElement, tooltip: HTMLElement) {
    const codeText = element.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 1500);
    });
  }
}
