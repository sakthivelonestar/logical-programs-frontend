import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-path-generators',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './path-generators.component.html',
  styleUrl: './path-generators.component.scss'
})
export class PathGeneratorsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.lineGeneratorExample()
    this.areaGeneratorExample()
    this.areaGeneratorArcExample()
    this.symbolGeneratorExample()
    this.linkGeneratorExample()
  }

  lineGeneratorExample() {
    // Data (x,y pairs)
    const data = [
      {x: 0, y: 30},
      {x: 50, y: 80},
      {x: 100, y: 45},
      {x: 150, y: 120},
      {x: 200, y: 70}
    ];

    // scales
    const x = d3.scaleLinear().domain([0, 200]).range([10, 390]);
    const y = d3.scaleLinear().domain([0, 140]).range([140, 10]);

    // line generator
    const lineGen = d3.line<{ x: number; y: number }>()
      .x(d => x(d.x))
      .y(d => y(d.y))
      .curve(d3.curveMonotoneX); // try curveBasis, curveLinear, curveCatmullRom

    const svg = d3.select('#line-demo');
    svg.selectAll('*').remove();

    svg.append('path')
      .datum(data)
      .attr('d', lineGen as any)
      .attr('fill', 'none')
      .attr('stroke', '#2b8cbe')
      .attr('stroke-width', 3);

    // Add points
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.x))
      .attr('cy', d => y(d.y))
      .attr('r', 3)
      .attr('fill', '#2b8cbe');
      }

areaGeneratorExample() {
  // Define the data type
  type Point = { x: number; y: number };

  // Data
  const data: Point[] = [
    { x: 0, y: 30 },
    { x: 50, y: 80 },
    { x: 100, y: 45 },
    { x: 150, y: 120 },
    { x: 200, y: 70 }
  ];

  // Scales
  const x = d3.scaleLinear().domain([0, 200]).range([10, 390]);
  const y = d3.scaleLinear().domain([0, 140]).range([140, 10]);

  // Area generator
  const areaGen = d3.area<Point>()
    .x(d => x(d.x))
    .y0(y(0))       // baseline
    .y1(d => y(d.y))
    .curve(d3.curveCardinal);

  // Select SVG
  const svg2 = d3.select<SVGSVGElement, unknown>('#area-demo');
  svg2.selectAll('*').remove();

  // Append path
  svg2.append('path')
    .datum(data)
    .attr('d', areaGen)
    .attr('fill', '#a6bddb')
    .attr('stroke', '#3690c0');
}

areaGeneratorArcExample() {
 const pieData = [10, 25, 40, 15];
const pie = d3.pie();
const arcs = pie(pieData);

const arcGen = d3.arc()
  .innerRadius(30)   // donut hole
  .outerRadius(70);

const svg3 = d3.select('#arc-demo');
svg3.selectAll('*').remove();

const g = svg3.append('g').attr('transform', 'translate(90,90)');

g.selectAll('path')
  .data(arcs)
  .enter()
  .append('path')
  .attr('d', arcGen as any)
  .attr('fill', (d,i) => d3.schemeCategory10[i])
  .attr('stroke', 'white');
}

symbolGeneratorExample() {
  const symbols = [d3.symbolCircle, d3.symbolCross, d3.symbolTriangle, d3.symbolStar];
const svg4 = d3.select('#symbol-demo');
svg4.selectAll('*').remove();

const g4 = svg4.append('g').attr('transform', 'translate(60,40)');

symbols.forEach((s, i) => {
  g4.append('path')
    .attr('d', d3.symbol().type(s).size(200)())
    .attr('transform', `translate(${i*40},0)`)
    .attr('fill', d3.schemeTableau10[i]);
});
}

linkGeneratorExample() {
 
  const linkData= [{
  source: {x: 10, y: 20},
  target: {x: 150, y: 100}
}];

const linkGen = d3.linkHorizontal<any,any>()
  .x(d => d.x)
  .y(d => d.y);

const svg5 = d3.select('#link-demo');
svg5.selectAll('*').remove();

svg5.append('path')
  .datum(linkData[0])
  .attr('d', linkGen as any)
  .attr('stroke', '#666')
  .attr('fill', 'none')
  .attr('stroke-width', 2);

// source/target markers
svg5.selectAll('circle')
  .data([linkData[0].source, linkData[0].target])
  .enter()
  .append('circle')
  .attr('cx', d => d.x)
  .attr('cy', d => d.y)
  .attr('r', 3)
  .attr('fill', '#666');
}
}