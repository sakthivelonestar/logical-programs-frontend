import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-event-handling',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.scss'
})
export class EventHandlingComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  }


}

