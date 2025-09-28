import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';


@Component({
  selector: 'app-axes-legends',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './axes-legends.component.html',
  styleUrl: './axes-legends.component.scss'
})
export class AxesLegendsComponent implements AfterViewInit  {
  ngAfterViewInit(): void {
    this.createBasicAxes()
    this.demonstrateScaleTypes()
    this.createCategoricalLegend()
    this.createColorGradientLegend()
    this.addGridLines()
    this.customizeAxes()
    this.createCompleteChart()
  }

createBasicAxes() {
    // Step 1: Select SVG and clear previous content
    const svg = d3.select('#axes-demo');
    svg.selectAll('*').remove(); // Clean slate

    // Step 2: Define dimensions and margins
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Step 3: Create scales
    const xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]); // Inverted for SVG coordinates

    // Step 4: Create axis generators
    const xAxis = d3.axisBottom(xScale)
        .ticks(5)                    // Roughly 5 tick marks
        .tickFormat(d => `${d}x`);   // Custom formatting

    const yAxis = d3.axisLeft(yScale)
        .ticks(5)
        .tickFormat(d => `${d}%`);

    // Step 5: Create container group with margins
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Step 6: Add axes to the SVG
    // X-axis goes at the bottom
    g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis);

    // Y-axis goes on the left
    g.append('g')
        .attr('class', 'y-axis')
        .call(yAxis);

    // Step 7: Add axis labels for clarity
    g.append('text')
        .attr('x', width / 2)
        .attr('y', height + 35)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Multiplier');

    g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -35)
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Percentage');
}

demonstrateScaleTypes() {
    const svg = d3.select('#scale-types-demo');
    svg.selectAll('*').remove();

    // 1. Ordinal scale for categories
    const categories = ['Apple', 'Banana', 'Orange', 'Grape'];
    const xOrdinal = d3.scaleBand()
        .domain(categories)
        .range([50, 350])
        .padding(0.); // 10% padding between bands

    // 2. Time scale for dates
    const timeData = [
        new Date(2023, 0, 1), // Jan 1, 2023
        new Date(2023, 6, 1), // Jul 1, 2023
        new Date(2024, 0, 1)  // Jan 1, 2024
    ];
    const xTime = d3.scaleTime()
        .domain([new Date("2023-01-01"), new Date("2024-01-01")]) // Finds min and max automatically
        .range([50, 350]);

    // Create different axis types
    const ordinalAxis = d3.axisBottom(xOrdinal);
    const timeAxis = d3.axisBottom(xTime)
      .tickFormat(d => d3.timeFormat('%b %Y')(d as Date)); // Fix: cast to Date

    // Draw ordinal axis
    svg.append('g')
        .attr('transform', 'translate(0,100)')
        .call(ordinalAxis);

    // Draw time axis
    svg.append('g')
        .attr('transform', 'translate(0,200)')
        .call(timeAxis as any)
        .selectAll('text')
        .attr('transform', 'rotate(-90)')  // rotate text
        .style('text-anchor', 'end')      // align properly
        .attr('dx', '-0.7em')
        .attr('dy', '-0.5em');

    // Add labels
    svg.append('text').attr('x', 10).attr('y', 95).text('Ordinal Scale:');
    svg.append('text').attr('x', 10).attr('y', 195).text('Time Scale:');
}

createCategoricalLegend() {
    const svg = d3.select('#legend-demo');
    svg.selectAll('*').remove();

    // Data and color scale
    const data = [
        { category: 'Technology', value: 45, description: 'Software & Hardware' },
        { category: 'Healthcare', value: 30, description: 'Medical Services' },
        { category: 'Finance', value: 25, description: 'Banking & Investment' },
        { category: 'Education', value: 20, description: 'Learning & Training' }
    ];

    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.category))
        .range(['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']);

    // Create legend container
    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(30,30)');

    // Create legend items
    const legendItems = legend.selectAll('.legend-item')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'legend-item')
        .attr('transform', (d, i) => `translate(0, ${i * 35})`);

    // Add colored rectangles
    legendItems.append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', d => colorScale(d.category) as string)
        .attr('rx', 3); // Rounded corners

    // Add category labels
    legendItems.append('text')
        .attr('x', 30)
        .attr('y', 10)
        .attr('dy', '0.35em') // Center vertically
        .style('font-weight', 'bold')
        .style('font-size', '14px')
        .text(d => d.category);

    // Add descriptions
    legendItems.append('text')
        .attr('x', 30)
        .attr('y', 25)
        .style('font-size', '12px')
        .style('fill', '#666')
        .text(d => d.description);

    // Add interactivity
    legendItems
        .on('mouseover', function(event, d) {
            d3.select(this).select('rect')
                .attr('stroke', '#333')
                .attr('stroke-width', 2);
        })
        .on('mouseout', function(event, d) {
            d3.select(this).select('rect')
                .attr('stroke', 'none');
        });
}

createColorGradientLegend() {
    const svg = d3.select('#gradient-legend-demo');
    svg.selectAll('*').remove();

    // Define gradient scale
    const colorScale = d3.scaleSequential(d3.interpolateViridis)
        .domain([0, 100]);

    // Create gradient definition
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
        .attr('id', 'temperature-gradient')
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '0%');

    // Add color stops
    const numStops = 20;
    for (let i = 0; i <= numStops; i++) {
        const offset = (i / numStops) * 100;
        const value = (i / numStops) * 100;
        gradient.append('stop')
            .attr('offset', `${offset}%`)
            .attr('stop-color', colorScale(value));
    }

    // Create legend bar
    svg.append('rect')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 300)
        .attr('height', 20)
        .style('fill', 'url(#temperature-gradient)')
        .style('stroke', '#333')
        .style('stroke-width', 1);

    // Add scale
    const legendScale = d3.scaleLinear()
        .domain([0, 100])
        .range([50, 350]);

    const legendAxis = d3.axisBottom(legendScale)
        .ticks(5)
        .tickFormat(d => `${d}°C`);

    svg.append('g')
        .attr('transform', 'translate(0,70)')
        .call(legendAxis);

    // Add title
    svg.append('text')
        .attr('x', 200)
        .attr('y', 40)
        .style('text-anchor', 'middle')
        .style('font-weight', 'bold')
        .text('Temperature Scale');
}


// Adding grid lines for better readability
 addGridLines() {
    const svg = d3.select('#axes-demo');
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().domain([0, 10]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    const g = svg.select('g');

    // Add horizontal grid lines
    g.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(yScale)
            .tickSize(-width)
            .tickFormat(null)
        )
        .style('stroke-dasharray', '3,3')
        .style('opacity', 0.3);

    // Add vertical grid lines
    g.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale)
            .tickSize(-height)
            .tickFormat(null)
        )
        .style('stroke-dasharray', '3,3')
        .style('opacity', 0.3);
}

// Customize axis styling
customizeAxes() {
    const svg = d3.select('#axes-demo');
    
    // Style the axes
    svg.selectAll('.x-axis path, .y-axis path')
        .style('stroke', '#333')
        .style('stroke-width', 2);
    
    svg.selectAll('.x-axis text, .y-axis text')
        .style('font-size', '12px')
        .style('font-family', 'Arial, sans-serif');
    
    svg.selectAll('.x-axis .tick line, .y-axis .tick line')
        .style('stroke', '#666');
}


createCompleteChart() {
  const svg = d3.select<SVGSVGElement, unknown>('#complete-chart');
  svg.selectAll('*').remove();

  // Sample data
  interface DataPoint {
    x: number;
    y: number;
    category: 'A' | 'B' | 'C';
    size: number;
  }

  const data: DataPoint[] = [
    { x: 2, y: 30, category: 'A', size: 10 },
    { x: 4, y: 60, category: 'B', size: 15 },
    { x: 6, y: 45, category: 'A', size: 20 },
    { x: 8, y: 80, category: 'C', size: 12 },
    { x: 3, y: 25, category: 'B', size: 18 },
    { x: 7, y: 70, category: 'C', size: 14 },
    { x: 5, y: 55, category: 'A', size: 16 }
  ];

  const margin = { top: 20, right: 120, bottom: 60, left: 60 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Scales
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.x) as [number, number])
    .range([0, width]);

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.y) as [number, number])
    .range([height, 0]);

  const colorScale = d3.scaleOrdinal<'A' | 'B' | 'C', string>()
    .domain(['A', 'B', 'C'])
    .range(['#ff6b6b', '#4ecdc4', '#45b7d1']);

  const sizeScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.size) as [number, number])
    .range([5, 15]);

  // Create main group
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Add axes
  g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(xScale));

  g.append('g')
    .call(d3.axisLeft(yScale));

  // Add axis labels
  g.append('text')
    .attr('x', width / 2)
    .attr('y', height + 40)
    .style('text-anchor', 'middle')
    .text('X Value');

  g.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -40)
    .style('text-anchor', 'middle')
    .text('Y Value');

  // Add data points
  g.selectAll<SVGCircleElement, DataPoint>('.point')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'point')
    .attr('cx', d => xScale(d.x))
    .attr('cy', d => yScale(d.y))
    .attr('r', d => sizeScale(d.size))
    .attr('fill', d => colorScale(d.category))
    .attr('stroke', '#333')
    .attr('stroke-width', 1)
    .style('opacity', 0.7);

  // Add legend
  const legend = svg.append('g')
    .attr('transform', `translate(${width + margin.left + 20},${margin.top})`);

  const categories: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
  const legendItems = legend.selectAll<SVGGElement, string>('.legend-item')
    .data(categories)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 25})`);

  legendItems.append('circle')
    .attr('r', 8)
    .attr('fill', d => colorScale(d))
    .attr('stroke', '#333');

  legendItems.append('text')
    .attr('x', 15)
    .attr('dy', '0.35em')
    .text(d => `Category ${d}`);
}



}
