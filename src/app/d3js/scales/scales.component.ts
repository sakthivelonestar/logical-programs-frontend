import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';

@Component({
  selector: 'app-scales',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './scales.component.html',
  styleUrl: './scales.component.scss'
})
export class ScalesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createLinearScaleExample();
      this.createOrdinalScaleExample();
      this.createTimeScaleExample();
    }, 0);
  }

  private createLinearScaleExample(): void {
    // Linear Scale Example - exactly matching the code shown
    const data = [10, 30, 50, 70, 90];
    const linearScale = d3.scaleLinear()
      .domain([0, 100])      // input range (data values)
      .range([0, 300]);       // output range (pixel width)

    console.log('linearScale(50) =', linearScale(50)); // → 150

    const container = d3.select('#linear-chart');
    
    // Clear existing content
    container.selectAll('*').remove();
    
    // Create bars using D3 but rendering as HTML divs
    const bars = container.selectAll('div.bar')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('display', 'inline-block')
      .style('width', d => linearScale(d) + 'px')
      .style('height', '25px')
      .style('background-color', 'steelblue')
      .style('margin', '2px 2px 2px 0')
      .style('color', 'white')
      .style('text-align', 'center')
      .style('line-height', '25px')
      .style('font-size', '12px')
      .style('border-radius', '3px')
      .text(d => `${d} → ${linearScale(d)}px`);
  }

  private createOrdinalScaleExample(): void {
    // Ordinal Scale Example - exactly matching the code shown
    const categories = ["A", "B", "C", "D"];
    const ordinalScale = d3.scaleOrdinal()
      .domain(categories)
      .range(["red", "green", "blue", "orange"]);

    console.log('ordinalScale("B") =', ordinalScale("B")); // → green

    const container = d3.select('#ordinal-example');
    
    // Clear existing content
    container.selectAll('*').remove();
    
    // Apply to elements - exactly as shown in the code
    container.selectAll('div')
      .data(categories)
      .enter()
      .append('div')
      .style('display', 'inline-block')
      .style('width', '60px')
      .style('height', '60px')
      .style('background-color', d => ordinalScale(d) as string)
      .style('margin', '5px')
      .style('color', 'white')
      .style('text-align', 'center')
      .style('line-height', '60px')
      .style('font-size', '18px')
      .style('font-weight', 'bold')
      .style('border-radius', '8px')
      .style('box-shadow', '0 2px 4px rgba(0,0,0,0.2)')
      .text(d => d);
  }

  private createTimeScaleExample(): void {
   // Time Scale Example - exactly matching the code shown
const dates = [
  new Date("2025-01-01"), 
  new Date("2025-04-01"), 
  new Date("2025-07-01"), 
  new Date("2025-10-01")
];

const timeScale = d3.scaleTime()
  .domain([new Date("2025-01-01"), new Date("2025-12-31")])
  .range([20, 380]);

const svg = d3.select('#time-chart');

// Clear existing content
svg.selectAll('*').remove();

// Add timeline line
svg.append('line')
  .attr('x1', 20)
  .attr('y1', 50)
  .attr('x2', 380)
  .attr('y2', 50)
  .attr('stroke', '#333')
  .attr('stroke-width', 2);

// Create circles for dates - exactly as shown in code
svg.selectAll('circle')
  .data(dates)
  .enter()
  .append('circle')
  .attr('cx', d => timeScale(d))
  .attr('cy', 50)
  .attr('r', 8)
  .attr('fill', 'steelblue')
  .attr('stroke', 'white')
  .attr('stroke-width', 2);

// Add date labels
const monthNames = ['Jan', 'Apr', 'Jul', 'Oct'];
svg.selectAll('text')
  .data(dates)
  .enter()
  .append('text')
  .attr('x', d => timeScale(d))
  .attr('y', 35)
  .attr('text-anchor', 'middle')
  .attr('font-size', '12px')
  .attr('fill', '#333')
  .text((d, i) => monthNames[i]);

// Add pixel position indicators
svg.selectAll('text.position')
  .data(dates)
  .enter()
  .append('text')
  .attr('class', 'position')
  .attr('x', d => timeScale(d))
  .attr('y', 70)
  .attr('text-anchor', 'middle')
  .attr('font-size', '10px')
  .attr('fill', '#666')
  .text(d => `${Math.round(timeScale(d))}px`)
  }


}
