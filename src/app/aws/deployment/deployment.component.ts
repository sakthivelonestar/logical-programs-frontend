import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-deployment',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './deployment.component.html',
  styleUrl: './deployment.component.scss'
})
export class DeploymentComponent {

}
