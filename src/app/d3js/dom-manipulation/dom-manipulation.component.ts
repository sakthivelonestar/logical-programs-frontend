import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';
import { MaximizeDirective } from '../../directives/maximize.directive';


@Component({
  selector: 'app-dom-manipulation',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './dom-manipulation.component.html',
  styleUrl: './dom-manipulation.component.scss'
})
export class DomManipulationComponent implements AfterViewInit {
  ngAfterViewInit() {
// Select a paragraph and change its text + style
  d3.select("#dom-example")
    .append("p")
    .text("Hello, D3.js!")
    .style("color", "steelblue")
    .style("font-weight", "bold");

// Data array
    const fruits = ["Apple", "Banana", "Cherry"];

    // Bind data and create list items
    d3.select("#data-binding")
      .selectAll("li")
      .data(fruits)
      .enter()
      .append("li")
      .text(d => d);


// New dataset with fewer items
  const newFruits = ["Apple", "Cherry"];

  // Update text and remove extra items
  const items = d3.select("#update-example")
    .selectAll('div')
    .data(newFruits);

  items.enter()
    .append("div")
    .merge(items as any) // Type assertion to 'any' to avoid type issues
    .text(d => d)
    .style("color", "green");

  items.exit().remove();

    }
}
