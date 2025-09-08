import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-modules-organization',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './modules-organization.component.html',
  styleUrl: './modules-organization.component.scss'
})
export class ModulesOrganizationComponent {

}
