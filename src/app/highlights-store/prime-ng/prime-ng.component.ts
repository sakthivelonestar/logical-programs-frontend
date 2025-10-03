import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { ButtonModule } from 'primeng/button'; 

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [CommonModule,MaximizeDirective,ButtonModule ],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.scss'
})
export class PrimeNgComponent {

  

}
