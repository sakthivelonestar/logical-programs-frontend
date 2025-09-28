import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';



@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }

}
