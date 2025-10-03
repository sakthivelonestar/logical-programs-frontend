import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sonar-qube',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './sonar-qube.component.html',
  styleUrl: './sonar-qube.component.scss'
})
export class SonarQubeComponent {

   copyCode(element: HTMLElement, tooltip: HTMLElement) {
    const codeText = element.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 1500);
    });
  }

}
