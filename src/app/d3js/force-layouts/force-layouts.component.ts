import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

interface Node {
  id: string;
  group: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
  size?: number;
  cluster?: number;
  radius?: number;
}

interface Link {
  source: string | Node;
  target: string | Node;
  strength?: number;
}

@Component({
  selector: 'app-force-layouts',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './force-layouts.component.html',
  styleUrl: './force-layouts.component.scss'
})
export class ForceLayoutsComponent implements AfterViewInit {
  private simulation!: d3.Simulation<Node, undefined>;
  private simulation2!: d3.Simulation<Node, undefined>;
  private simulation3!: d3.Simulation<Node, undefined>;
  private forcesEnabled = true;

  ngAfterViewInit(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      this.createBasicSimulation();
      this.createDragSimulation();
      this.createClusterSimulation();
    }, 100);
  }

  private createBasicSimulation(): void {
    const nodes: Node[] = [
      {id: 'A', group: 1},
      {id: 'B', group: 1},
      {id: 'C', group: 2},
      {id: 'D', group: 2},
      {id: 'E', group: 3}
    ];

    const links: Link[] = [
      {source: 'A', target: 'B'},
      {source: 'B', target: 'C'},
      {source: 'C', target: 'D'},
      {source: 'A', target: 'D'},
      {source: 'D', target: 'E'}
    ];

    // Create force simulation
    this.simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links)
        .id((d: any) => d.id)
        .distance(60))
      .force('charge', d3.forceManyBody()
        .strength(-300))
      .force('center', d3.forceCenter(200, 100));

    // SVG setup
    const svg = d3.select('#basic-force');
    svg.selectAll('*').remove();

    // Create links
    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 2);

    // Create nodes
    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 15)
      .attr('fill', (d: any) => d3.schemeCategory10[d.group])
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Add labels
    const label = svg.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .attr('font-size', '12px')
      .attr('fill', 'white')
      .text((d: any) => d.id);

    // Update positions on simulation tick
    this.simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      label
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });
  }

  private createDragSimulation(): void {
    const dragstarted = (event: any, d: any) => {
      if (!event.active) this.simulation2.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = (event: any, d: any) => {
      d.fx = event.x;
      d.fy = event.y;
    };

    const dragended = (event: any, d: any) => {
      if (!event.active) this.simulation2.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    const nodes2: Node[] = [
      {id: 'Central', group: 1, size: 20},
      {id: 'Node1', group: 2, size: 15},
      {id: 'Node2', group: 2, size: 15},
      {id: 'Node3', group: 3, size: 12},
      {id: 'Node4', group: 3, size: 12},
      {id: 'Node5', group: 3, size: 10}
    ];

    const links2: Link[] = [
      {source: 'Central', target: 'Node1', strength: 1},
      {source: 'Central', target: 'Node2', strength: 1},
      {source: 'Node1', target: 'Node3', strength: 0.5},
      {source: 'Node2', target: 'Node4', strength: 0.5},
      {source: 'Node3', target: 'Node5', strength: 0.3}
    ];

    // Create simulation with variable forces
    this.simulation2 = d3.forceSimulation(nodes2)
      .force('link', d3.forceLink(links2)
        .id((d: any) => d.id)
        .distance((d: any) => 50 / d.strength)
        .strength((d: any) => d.strength))
      .force('charge', d3.forceManyBody()
        .strength((d: any) => -10 * d.size))
      .force('center', d3.forceCenter(200, 120))
      .force('collision', d3.forceCollide()
        .radius((d: any) => d.size + 2));

    const svg2 = d3.select('#drag-force');
    svg2.selectAll('*').remove();

    // Create elements with enhanced styling
    const link2 = svg2.append('g')
      .selectAll('line')
      .data(links2)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', (d: any) => Math.sqrt(d.strength * 5))
      .attr('opacity', 0.6);

    const node2 = svg2.append('g')
      .selectAll('circle')
      .data(nodes2)
      .enter().append('circle')
      .attr('r', (d: any) => d.size)
      .attr('fill', (d: any) => d3.schemeCategory10[d.group])
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .attr('cursor', 'pointer')
      .call(d3.drag<SVGCircleElement, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    const label2 = svg2.append('g')
      .selectAll('text')
      .data(nodes2)
      .enter().append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .attr('font-size', '10px')
      .attr('fill', 'white')
      .attr('pointer-events', 'none')
      .text((d: any) => d.id);

    this.simulation2.on('tick', () => {
      link2
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node2
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      label2
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });
  }

  private createClusterSimulation(): void {
    const clusterNodes: Node[] = [];
    const clusterLinks: Link[] = [];
    const numClusters = 3;
    const numNodesPerCluster = 5;

    // Generate clustered data
    for (let cluster = 0; cluster < numClusters; cluster++) {
      for (let i = 0; i < numNodesPerCluster; i++) {
        clusterNodes.push({
          id: `C${cluster}-N${i}`,
          group: cluster,
          cluster: cluster,
          radius: Math.random() * 8 + 5
        });
      }
    }

    // Create intra-cluster links
    clusterNodes.forEach((node, i) => {
      if (i % numNodesPerCluster !== 0) {
        clusterLinks.push({
          source: node.id,
          target: clusterNodes[Math.floor(i / numNodesPerCluster) * numNodesPerCluster].id
        });
      }
    });

    this.simulation3 = d3.forceSimulation(clusterNodes)
      .force('link', d3.forceLink(clusterLinks).id((d: any) => d.id).distance(30))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(200, 120))
      .force('collision', d3.forceCollide().radius((d: any) => d.radius))
      .force('x', d3.forceX().strength(0.1))
      .force('y', d3.forceY().strength(0.1));

    const svg3 = d3.select('#cluster-force');
    svg3.selectAll('*').remove();

    const link3 = svg3.append('g')
      .selectAll('line')
      .data(clusterLinks)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 1);

    const node3 = svg3.append('g')
      .selectAll('circle')
      .data(clusterNodes)
      .enter().append('circle')
      .attr('r', (d: any) => d.radius)
      .attr('fill', (d: any) => d3.schemeCategory10[d.cluster])
      .attr('stroke', 'white')
      .attr('stroke-width', 1);

    this.simulation3.on('tick', () => {
      link3
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node3
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    });
  }

  // Public methods called from template
  restartBasicSimulation(): void {
    if (this.simulation) {
      this.simulation.alpha(1).restart();
    } else {
      this.createBasicSimulation();
    }
  }

  restartDragSimulation(): void {
    if (this.simulation2) {
      this.simulation2.alpha(1).restart();
    } else {
      this.createDragSimulation();
    }
  }

  restartClusterSimulation(): void {
    if (this.simulation3) {
      this.simulation3.alpha(1).restart();
    } else {
      this.createClusterSimulation();
    }
  }

  toggleForces(): void {
    if (this.simulation2) {
      this.forcesEnabled = !this.forcesEnabled;
      if (this.forcesEnabled) {
        this.simulation2.force('charge', d3.forceManyBody().strength((d: any) => -10 * d.size));
      } else {
        this.simulation2.force('charge', null);
      }
      this.simulation2.alpha(0.3).restart();
    }
  }

  addCluster(): void {
    // This would add a new cluster - simplified for demo
    if (this.simulation3) {
      this.simulation3.alpha(0.5).restart();
    }
  }
}