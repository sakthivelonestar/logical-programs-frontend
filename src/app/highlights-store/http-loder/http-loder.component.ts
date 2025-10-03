import {  Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-loder',
  standalone: true,
  imports: [CommonModule,MaximizeDirective],
  templateUrl: './http-loder.component.html',
  styleUrl: './http-loder.component.scss'
})
export class HttpLoderComponent {

   copyCode(element: HTMLElement, tooltip: HTMLElement) {
    const codeText = element.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 1500);
    });
  }

}
