import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import * as d3 from 'd3';
import { MaximizeDirective } from '../../directives/maximize.directive';


@Component({
  selector: 'app-basic-transitions',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './basic-transitions.component.html',
  styleUrl: './basic-transitions.component.scss'
})
export class BasicTransitionsComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.simpleBarAnimation()
    this.colorChangeAnimation()
    this.moveAnimation()
    this.sizeAnimation()
    this.fadeAnimation()
  }

 simpleBarAnimation() {
    const data: number[] = [10, 20, 30, 15, 30];
    
    const container = d3.select('#simple-bar-transition');
    container.selectAll('*').remove();

    // Create bars
    container.selectAll('div.bar')
        .data(data)
        .enter()
        .append('div')
        .style('display', 'inline-block')
        .style('width', '30px')
        .style('margin', '2px')
        .style('background-color', 'steelblue')
        .style('height', '0px')
        .style('vertical-align', 'bottom')
        // Add transition
        .transition()
        .duration(1000)
        .style('height', d => d * 10 + 'px');
}

colorChangeAnimation() {
    const svg = d3.select('#color-transition');
    svg.selectAll('*').remove();

    const circle = svg.append('circle')
        .attr('cx', 100)
        .attr('cy', 75)
        .attr('r', 40)
        .attr('fill', 'blue');

    // Change color smoothly
    circle.transition()
        .duration(2000)
        .attr('fill', 'red');
}

moveAnimation() {
    const svg = d3.select('#move-transition');
    svg.selectAll('*').remove();

    const circle = svg.append('circle')
        .attr('cx', 30)
        .attr('cy', 75)
        .attr('r', 20)
        .attr('fill', 'green');

    // Move to new position
    circle.transition()
        .duration(1500)
        .attr('cx', 270);
}

sizeAnimation() {
    const svg = d3.select('#size-transition');
    svg.selectAll('*').remove();

    const circle = svg.append('circle')
        .attr('cx', 100)
        .attr('cy', 75)
        .attr('r', 10)
        .attr('fill', 'purple');

    // Grow the circle
    circle.transition()
        .duration(1000)
        .attr('r', 50);
}

fadeAnimation() {
    const container = d3.select('#fade-transition');
    container.selectAll('*').remove();

    const box = container.append('div')
        .style('width', '100px')
        .style('height', '100px')
        .style('background-color', 'orange')
        .style('margin', '20px auto')
        .style('opacity', 0);

    // Fade in
    box.transition()
        .duration(1000)
        .style('opacity', 1);
}
           


      

 
}
