import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cron-job',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './cron-job.component.html',
  styleUrl: './cron-job.component.scss'
})
export class CronJobComponent {
      copyCode(element: HTMLElement, tooltip: HTMLElement) {
    const codeText = element.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 1500);
    });
  }
}
