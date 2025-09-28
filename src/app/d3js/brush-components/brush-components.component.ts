import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-brush-components',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './brush-components.component.html',
  styleUrl: './brush-components.component.scss'
})
export class BrushComponentsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    
  }

}
