import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-force-layouts',
  standalone: true,
imports: [CommonModule, MaximizeDirective],
  templateUrl: './force-layouts.component.html',
  styleUrl: './force-layouts.component.scss'
})
export class ForceLayoutsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }

}
