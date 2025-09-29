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
    this.eventAreaExample()
    this.mouseoverClick()
    this.hoverHighlight()
  }
mouseoverClick() {
  // sample data
const data1 = Array.from({length: 15}, (_, i) => ({x: i*20, y: Math.random()*100}));

const x1 = d3.scaleLinear().domain([0,300]).range([10,390]);
const y1 = d3.scaleLinear().domain([0,100]).range([140,10]);

const svg1 = d3.select('#event-scatter');
svg1.selectAll('*').remove();

// draw points with events
svg1.selectAll('circle')
  .data(data1)
  .enter()
  .append('circle')
  .attr('cx', d => x1(d.x))
  .attr('cy', d => y1(d.y))
  .attr('r', 6)
  .attr('fill', '#2b8cbe')
  .on('mouseover', function(event, d) {
      d3.select(this).attr('fill', '#f03b20').attr('r', 9);
  })
  .on('mouseout', function(event, d) {
      d3.select(this).attr('fill', '#2b8cbe').attr('r', 6);
  })
  .on('click', function(event, d) {
      console.log('Clicked point:', d);
  });
}

hoverHighlight() {
  interface Point { x: number; y: number; }
  // sample data
const data2 = [{x:0,y:30},{x:50,y:80},{x:100,y:45},{x:150,y:120},{x:200,y:70}];

const x2 = d3.scaleLinear().domain([0,200]).range([10,390]);
const y2 = d3.scaleLinear().domain([0,140]).range([140,10]);

const svg2 = d3.select('#event-line');
svg2.selectAll('*').remove();

const lineGen2 = d3.line <Point>()
  .x(d => x2(d.x))
  .y(d => y2(d.y))
  .curve(d3.curveMonotoneX);

const path = svg2.append('path')
  .datum(data2)
  .attr('d', lineGen2 as any)
  .attr('fill', 'none')
  .attr('stroke', '#2b8cbe')
  .attr('stroke-width', 3)
  .on('mouseover', function() {
      d3.select(this).attr('stroke', '#f03b20').attr('stroke-width', 5);
  })
  .on('mouseout', function() {
      d3.select(this).attr('stroke', '#2b8cbe').attr('stroke-width', 3);
  });
}

// inside Angular component
eventAreaExample() {
  interface Point { x: number; y: number; }

  // sample data
  let data3: Point[] = [
    { x: 0, y: 20 },
    { x: 50, y: 60 },
    { x: 100, y: 40 },
    { x: 150, y: 80 },
    { x: 200, y: 50 }
  ];

  const x3 = d3.scaleLinear().domain([0, 200]).range([10, 390]);
  const y3 = d3.scaleLinear().domain([0, 100]).range([140, 10]);

  const svg3 = d3.select('#event-area');
  svg3.selectAll('*').remove();

  const areaGen3 = d3.area<Point>()
    .x(d => x3(d.x))
    .y0(y3(0))
    .y1(d => y3(d.y))
    .curve(d3.curveCardinal);

  const content3 = svg3.append('g');

  // draw area
  content3.append('path')
    .datum(data3)
    .attr('d', areaGen3 as any)
    .attr('fill', '#a6bddb')
    .attr('stroke', '#3690c0');

  // drag behavior
  const drag = d3.drag<Element, Point>()
    .on('drag', function(event: any, d: Point) {
      d.y = y3.invert(event.y);
      d3.select(this).attr('cy', y3(d.y));
      content3.select('path').attr('d', areaGen3(data3) as any);
    });

  // draw draggable circles
  content3.selectAll<SVGCircleElement, Point>('circle')
    .data(data3)
    .enter()
    .append('circle')
    .attr('cx', d => x3(d.x))
    .attr('cy', d => y3(d.y))
    .attr('r', 6)
    .attr('fill', '#2b8cbe')
    .call(drag as any);
}

}

