import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';


@Component({
  selector: 'app-advanced-scales',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './advanced-scales.component.html',
  styleUrl: './advanced-scales.component.scss'
})
export class AdvancedScalesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
     this.logarithmicScaleDemo()
     this.ordinalColorScale()
     this.sequentialColorScale()
     this.powerScaleDemo()
     this.bandScaleDemo()
     this.powerScaleDemo()
  }

  logarithmicScaleDemo() {
    const data = [1, 10, 100, 1000, 10000, 100000];
    
    // Create log scale
    const logScale = d3.scaleLog()
        .domain([1, 100000])
        .range([20, 400]);
    
    const container = d3.select('#log-scale-demo');
    container.selectAll('*').remove();
    
    container.selectAll('.bar')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style('width', d => logScale(d) + 'px')
        .style('height', '25px')
        .style('background-color', '#e74c3c')
        .style('margin-bottom', '5px')
        .style('display', 'block')
        .text(d => d);
  }

  ordinalColorScale() {
      const categories = ['Tech', 'Finance', 'Healthcare', 'Education', 'Retail'];
      
      // Create ordinal color scale
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
          .domain(categories);
      
      const container = d3.select('#ordinal-color-demo');
      container.selectAll('*').remove();
      
      const div = container.append('div')
          .style('display', 'flex')
          .style('flex-wrap', 'wrap')
          .style('gap', '10px');
      
      categories.forEach(category => {
          div.append('div')
              .style('background-color', colorScale(category))
              .style('width', '80px')
              .style('height', '50px')
              .style('border-radius', '5px')
              .style('display', 'flex')
              .style('align-items', 'center')
              .style('justify-content', 'center')
              .style('color', 'white')
              .style('font-size', '12px')
              .text(category);
      });
  }

  sequentialColorScale() {
      const data = [0, 10, 25, 50, 75, 90, 100];
      
      // Create sequential color scale
      const colorScale = d3.scaleSequential(d3.interpolateBlues)
          .domain([0, 100]);
      
      const container = d3.select('#sequential-color-demo');
      container.selectAll('*').remove();
      
      const div = container.append('div')
          .style('display', 'flex')
          .style('align-items', 'center')
          .style('gap', '5px');
      
      data.forEach(value => {
          div.append('div')
              .style('background-color', colorScale(value))
              .style('width', '50px')
              .style('height', '50px')
              .style('border-radius', '50%')
              .style('display', 'flex')
              .style('align-items', 'center')
              .style('justify-content', 'center')
              .style('color', value > 50 ? 'white' : 'black')
              .style('font-size', '12px')
              .text(value);
      });
  }

  bandScaleDemo() {
    const data = [
      { name: 'A', value: 30 },
      { name: 'B', value: 80 },
      { name: 'C', value: 45 },
      { name: 'D', value: 60 },
      { name: 'E', value: 20 }
    ];

    // Band scale for x-axis
    const xScale = d3.scaleBand<string>()
      .domain(data.map(d => d.name))
      .range([0, 300])
      .padding(0.1);

    // Linear scale for y
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)!]) // non-null assertion
      .range([0, 120]);

    const svg = d3.select<SVGSVGElement, unknown>('#band-scale-demo');
    svg.selectAll('*').remove();

    // Bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.name)! + 50) // non-null assertion
      .attr('y', d => 140 - yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => yScale(d.value))
      .attr('fill', '#2ecc71');

    // Labels
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => xScale(d.name)! + xScale.bandwidth() / 2 + 50)
      .attr('y', 155)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .text(d => d.name);
  }

  powerScaleDemo() {
      const data = [1, 2, 3, 4, 5, 6, 7, 8];
      
      // Create power scale with exponent 2 (quadratic)
      const powerScale = d3.scalePow()
          .exponent(2)
          .domain([1, 8])
          .range([20, 300]);
      
      const container = d3.select('#power-scale-demo');
      container.selectAll('*').remove();
      
      const div = container.append('div')
          .style('display', 'flex')
          .style('align-items', 'end')
          .style('gap', '5px');
      
      data.forEach(value => {
          div.append('div')
              .style('background-color', '#9b59b6')
              .style('width', '30px')
              .style('height', powerScale(value) / 5 + 'px')
              .style('display', 'flex')
              .style('align-items', 'end')
              .style('justify-content', 'center')
              .style('color', 'white')
              .style('font-size', '12px')
              .style('padding-bottom', '5px')
              .text(value);
      });
    }


}
