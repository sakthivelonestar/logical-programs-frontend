import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';



@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createStackedChart()
    this.createPieChart()
    this.createTreemap()
    this.createForceNetwork()
    this.createChordLayoutExample()
  }

 createStackedChart(): void {
    // Sample data - sales by quarter and product
    const data = [
      { quarter: 'Q1', productA: 20, productB: 35, productC: 15 },
      { quarter: 'Q2', productA: 25, productB: 28, productC: 22 },
      { quarter: 'Q3', productA: 30, productB: 42, productC: 18 },
      { quarter: 'Q4', productA: 22, productB: 38, productC: 25 }
    ];

    // Create stack layout
    const stack = d3.stack()
      .keys(['productA', 'productB', 'productC'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const stackedData = stack(data as any);

    // Set up scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.quarter))
      .range([50, 350])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(stackedData, layer => d3.max(layer, d => d[1]))!])
      .range([200, 20]);

    const colorScale = d3.scaleOrdinal()
      .domain(['productA', 'productB', 'productC'])
      .range(['#1f77b4', '#ff7f0e', '#2ca02c']);

    // Create SVG and draw stacked bars
    const svg = d3.select('#stack-demo');
    svg.selectAll('*').remove();

    const groups = svg.selectAll('g')
      .data(stackedData)
      .enter()
      .append('g')
      .attr('fill', d => colorScale(d.key) as string);

    groups.selectAll('rect')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('x', (d: any) => xScale(d.data.quarter)!)
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth());
  }

  createPieChart(): void {
    // Data for pie chart
    const pieData = [
      { category: 'Desktop', value: 45 },
      { category: 'Mobile', value: 35 },
      { category: 'Tablet', value: 15 },
      { category: 'Other', value: 5 }
    ];

    // Create pie layout
    const pie = d3.pie<any>()
      .value(d => d.value)
      .sort(null) // preserve data order
      .padAngle(0.02); // small gap between slices

    const arcs = pie(pieData);

    // Arc generator for rendering
    const arcGen = d3.arc<any>()
      .innerRadius(40) // donut hole (0 for full pie)
      .outerRadius(80)
      .cornerRadius(3); // rounded corners

    const svg2 = d3.select('#pie-demo');
    svg2.selectAll('*').remove();

    const g = svg2.append('g')
      .attr('transform', 'translate(110,110)');

    // Draw pie slices
    g.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('d', arcGen)
      .attr('fill', (d, i) => d3.schemeCategory10[i])
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Add labels
    g.selectAll('text')
      .data(arcs)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arcGen.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', 'white')
      .text(d => d.data.category);
  }

  createTreemap(): void {
      interface TreeNode {
      name: string;
      value?: number;
      children?: TreeNode[];
    }
      // Hierarchical data structure
      const hierarchyData: TreeNode = {
        name: 'Root',
        children: [
          {
            name: 'Branch A',
            children: [
              { name: 'Leaf A1', value: 25 },
              { name: 'Leaf A2', value: 15 }
            ]
          },
          {
            name: 'Branch B',
            children: [
              { name: 'Leaf B1', value: 30 },
              { name: 'Leaf B2', value: 20 },
              { name: 'Leaf B3', value: 10 }
            ]
          }
        ]
      };

      // Create hierarchy with correct typing
      const root = d3.hierarchy<TreeNode>(hierarchyData)
        .sum(d => d.value ?? 0)   // handle undefined values
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

      // Treemap layout
      const treemap = d3.treemap<TreeNode>()
        .size([300, 200])
        .padding(2)
        .round(true);

      treemap(root);

      const svg3 = d3.select<SVGSVGElement, unknown>('#treemap-demo');
      svg3.selectAll('*').remove();

      // Draw rectangles
      const leaf = svg3.selectAll<SVGGElement, d3.HierarchyRectangularNode<TreeNode>>('g')
        .data(root.leaves())
        .enter()
        .append('g')
        .attr('transform', (d:any) => `translate(${d.x0 + 10},${d.y0 + 10})`);

      leaf.append('rect')
        .attr('width', (d: any) => d.x1 - d.x0)
        .attr('height', (d: any) => d.y1 - d.y0)
        .attr('fill', (d: any) => d3.interpolateBlues((d.value ?? 0) / 30))
        .attr('stroke', 'white');

      leaf.append('text')
        .attr('x', 4)
        .attr('y', 14)
        .attr('font-size', '10px')
        .text(d => d.data.name);
  }

 createForceNetwork(): void {
  interface Node {
  id: string;
  group: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

interface Link {
  source: Node;
  target: Node;
}
    // Nodes
    const nodes: Node[] = [
      { id: 'A', group: 1 },
      { id: 'B', group: 1 },
      { id: 'C', group: 2 },
      { id: 'D', group: 2 },
      { id: 'E', group: 3 }
    ];

    // Links
    const linksRaw = [
      { source: 'A', target: 'B' },
      { source: 'B', target: 'C' },
      { source: 'C', target: 'D' },
      { source: 'D', target: 'E' },
      { source: 'A', target: 'E' }
    ];

    // Map string links to Node objects
    const links: Link[] = linksRaw.map(l => ({
      source: nodes.find(n => n.id === l.source)!,
      target: nodes.find(n => n.id === l.target)!
    }));

    // Simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink<Node, Link>(links).distance(50))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(150, 100));

    const svg = d3.select<SVGSVGElement, unknown>('#force-demo');
    svg.selectAll('*').remove();

    // Links
    const link = svg.append('g')
      .selectAll<SVGLineElement, Link>('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 2);

    // Nodes
    const node = svg.append('g')
      .selectAll<SVGCircleElement, Node>('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 12)
      .attr('fill', d => d3.schemeCategory10[d.group])
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Tick updates
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x!)
        .attr('y1', d => d.source.y!)
        .attr('x2', d => d.target.x!)
        .attr('y2', d => d.target.y!);

      node
        .attr('cx', d => d.x!)
        .attr('cy', d => d.y!);
    });
  }

  createChordLayoutExample() {
    // Matrix representing flows between entities
const matrix: number[][] = [
  [0, 5, 6, 4],
  [7, 0, 4, 3],
  [8, 4, 0, 6],
  [6, 3, 5, 0]
];

const chord = d3.chord()
  .padAngle(0.05)
  .sortSubgroups(d3.descending);

const chords = chord(matrix);

const svg5 = d3.select<SVGSVGElement, unknown>('#chord-demo');
svg5.selectAll('*').remove();

const g5 = svg5.append('g')
  .attr('transform', 'translate(110,110)');

const arc = d3.arc<d3.ChordGroup>()
  .innerRadius(80)
  .outerRadius(90);

const ribbon = d3.ribbon<d3.Chord, d3.ChordSubgroup>()
  .radius(80);

// Draw groups (outer arcs)
g5.append('g')
  .selectAll('path')
  .data(chords.groups)
  .enter()
  .append('path')
  .attr('d', d => arc(d)!)
  .attr('fill', (d, i) => d3.schemeCategory10[i % 10])
  .attr('stroke', 'white');

// Draw chords (ribbons)
g5.append('g')
  .selectAll('path')
  .data(chords)
  .enter()
  .append('path')
  .attr('d', d => ribbon(d)!)
  .attr('fill', d => d3.schemeCategory10[d.source.index % 10])
  .attr('opacity', 0.7);
  }
  
}
