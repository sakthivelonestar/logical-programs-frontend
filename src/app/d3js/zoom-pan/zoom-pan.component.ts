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
  this.scatterPlot()
  this.lineChart()
  }

  scatterPlot(){
// sample data
const data1 = Array.from({length: 20}, (_, i) => ({x: i*20, y: Math.random()*100}));

// scales
const x1 = d3.scaleLinear().domain([0,400]).range([10,390]);
const y1 = d3.scaleLinear().domain([0,100]).range([140,10]);

const svg1 = d3.select('#zoom-scatter');
svg1.selectAll('*').remove();

// create container for zoomable content
const content1 = svg1.append('g');

// draw points
content1.selectAll('circle')
  .data(data1)
  .enter()
  .append('circle')
  .attr('cx', d => x1(d.x))
  .attr('cy', d => y1(d.y))
  .attr('r', 5)
  .attr('fill', '#2b8cbe');

// zoom behavior
const zoom1 = d3.zoom()
  .scaleExtent([0.5,5])
  .on('zoom', (event) => {
    content1.attr('transform', event.transform);
  });

// apply zoom to svg
svg1.call(zoom1 as any);    
  }

  lineChart(){
    // sample data
const data2 = [
  {x:0,y:30},{x:50,y:80},
  {x:100,y:45},{x:150,y:120},
  {x:200,y:70},{x:250,y:100}
];

const x2 = d3.scaleLinear().domain([0,250]).range([40,380]);
const y2 = d3.scaleLinear().domain([0,180]).range([120,20]);

const svg2 = d3.select('#zoom-line');
const content2 = svg2.append('g');

// add axes
content2.append('g')
  .attr('transform', 'translate(0,120)')
  .call(d3.axisBottom(x2));

content2.append('g')
  .attr('transform', 'translate(40,0)')
  .call(d3.axisLeft(y2))
  .selectAll('text')
        .attr('transform', 'rotate(360)')  // rotate text
        .style('text-anchor', 'end')      // align properly
        
  

// line generator
const lineGen2 = d3.line<{x: number, y: number}>()
  .x(d => x2(d.x))
  .y(d => y2(d.y))
  .curve(d3.curveMonotoneX);

// draw line and points
content2.append('path')
  .datum(data2)
  .attr('d', lineGen2 as any)
  .attr('fill', 'none')
  .attr('stroke', '#2b8cbe')
  .attr('stroke-width', 3);

content2.selectAll('circle')
  .data(data2)
  .enter()
  .append('circle')
  .attr('cx', d => x2(d.x))
  .attr('cy', d => y2(d.y))
  .attr('r', 5)
  .attr('fill', '#2b8cbe');

const zoom2 = d3.zoom()
  .scaleExtent([0.5,5])
  .on('zoom', (event) => {
    content2.attr('transform', event.transform);
  });

svg2.call(zoom2 as any);
  }


 

}

