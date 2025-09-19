import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-templates-forms',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './templates-forms.component.html',
  styleUrl: './templates-forms.component.scss'
})
export class TemplatesFormsComponent {

}
