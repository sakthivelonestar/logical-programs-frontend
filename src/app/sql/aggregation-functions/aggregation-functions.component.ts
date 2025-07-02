import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-aggregation-functions',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './aggregation-functions.component.html',
  styleUrl: './aggregation-functions.component.scss'
})
export class AggregationFunctionsComponent {

}
