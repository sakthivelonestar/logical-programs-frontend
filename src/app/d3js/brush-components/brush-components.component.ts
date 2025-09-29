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
     this.scatterPlotBrush()
     this.lineGeneratorExample()
  }

  scatterPlotBrush(){
    // sample data
const data1 = Array.from({length: 20}, (_, i) => ({x: i*20, y: Math.random()*100}));

// scales
const x1 = d3.scaleLinear().domain([0,400]).range([10,390]);
const y1 = d3.scaleLinear().domain([0,100]).range([140,10]);

const svg1 = d3.select('#brush-scatter');
svg1.selectAll('*').remove();

// draw points
svg1.selectAll('circle')
  .data(data1)
  .enter()
  .append('circle')
  .attr('cx', d => x1(d.x))
  .attr('cy', d => y1(d.y))
  .attr('r', 5)
  .attr('fill', '#2b8cbe');

// brush setup
const brush1 = d3.brush()
  .extent([[0,0],[400,150]])
  .on('brush end', (event:any) => {
    const [[x0,y0],[x1,y1]] = event.selection || [[0,0],[0,0]];
    svg1.selectAll('circle')
        .attr('fill', (d:any) => (x1(d.x) >= x0 && x1(d.x) <= x1 && y1(d.y) >= y0 && y1(d.y) <= y1) ? '#f03b20' : '#2b8cbe');
  });

svg1.append('g').call(brush1);
  }

  lineGeneratorExample() {
// sample data
interface Point { x: number; y: number; }
const data2: Point[] = [
  {x:0, y:30},
  {x:50, y:80},
  {x:100, y:45},
  {x:150, y:120},
  {x:200, y:70},
  {x:250, y:100}
];

// scales
const xScale = d3.scaleLinear().domain([0, 250]).range([10, 390]);
const yScale = d3.scaleLinear().domain([0, 140]).range([140, 10]);

// line generator
const lineGen = d3.line<Point>()
  .x((d: Point) => xScale(d.x))
  .y((d: Point) => yScale(d.y))
  .curve(d3.curveMonotoneX);

const svg = d3.select('#brush-line');
svg.selectAll('*').remove();

// draw line path
svg.append('path')
  .datum(data2)
  .attr('d', lineGen as any)
  .attr('fill', 'none')
  .attr('stroke', '#2b8cbe')
  .attr('stroke-width', 3);

// draw points
svg.selectAll('circle')
  .data(data2)
  .enter()
  .append('circle')
  .attr('cx', (d: Point) => xScale(d.x))
  .attr('cy', (d: Point) => yScale(d.y))
  .attr('r', 5)
  .attr('fill', '#2b8cbe');

// brush setup
const brush = d3.brush()
  .extent([[0, 0], [400, 150]])
  .on('brush end', (event) => {
    const [[x0, y0], [x1b, y1b]] = event.selection || [[0, 0], [0, 0]];
    svg.selectAll('circle')
        .attr('fill', (d: any) => 
            (xScale(d.x) >= x0 && xScale(d.x) <= x1b && yScale(d.y) >= y0 && yScale(d.y) <= y1b) 
            ? '#f03b20' 
            : '#2b8cbe'
        );
  });

svg.append('g').call(brush);
  }

}
