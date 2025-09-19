import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.scss'
})
export class LifecycleHooksComponent {

}
