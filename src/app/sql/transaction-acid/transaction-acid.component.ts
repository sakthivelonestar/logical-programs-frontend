import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-transaction-acid',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './transaction-acid.component.html',
  styleUrl: './transaction-acid.component.scss'
})
export class TransactionAcidComponent {

}
