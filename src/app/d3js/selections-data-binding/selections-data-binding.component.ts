import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';

@Component({
  selector: 'app-selections-data-binding',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './selections-data-binding.component.html',
  styleUrls: ['./selections-data-binding.component.scss']
})
export class SelectionsDataBindingComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createParagraphs();
    this.createUpdateExample();
    this.dataBindingSvg();
  }

  createParagraphs(): void {
    const data = 'This example demonstrates basic data binding in D3.js using paragraphs';

    d3.select("#chart")
      .selectAll("p")
      .data([data])
      .enter()
      .append("p")
      .text(d => `Value: ${d}`);
  }

  createUpdateExample(): void {
    const numbers = [5, 10, 15];

    const selection = d3.select("#update-example")
  .selectAll("div")
  .data(numbers);

    // ENTER (new elements)
    selection.enter()
      .append("div")
      .text(d => d);

    // UPDATE (existing elements)
    selection.text(d => d);

    // EXIT (remove unused)
    selection.exit().remove();
  }

  dataBindingSvg(): void {
    const dataset = [30, 50, 70, 90];

d3.select("#circle-chart")
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => (i * 70) + 50)
  .attr("cy", 100)
  .attr("r", d => d / 5)
  .attr("fill", "lightblue")
  .attr("stroke", "black");
   }
}
