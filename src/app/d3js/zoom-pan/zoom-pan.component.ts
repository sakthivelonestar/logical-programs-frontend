import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-zoom-pan',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './zoom-pan.component.html',
  styleUrl: './zoom-pan.component.scss'
})
export class ZoomPanComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    
  }

}

