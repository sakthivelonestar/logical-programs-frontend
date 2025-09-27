import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import * as d3 from 'd3';

@Component({
  selector: 'app-data-loading',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './data-loading.component.html',
  styleUrl: './data-loading.component.scss'
})
export class DataLoadingComponent implements AfterViewInit {

  ngAfterViewInit() {
        // Example: Load data from a CSV file
     d3.csv("assets/fruits.csv")
        .then(data => {
          console.log("CSV Data:", data);
              //   const con = d3.select("#C")
              // con.selectAll("h1")
              // .data(data as any[])
              // .enter()
              // .append("h1")
              // .text(d => `${d.name} - ${d.color}`)
              // .style("color", d => d.color);
    })
      .catch(error => {
        console.error("Error loading CSV:", error);
    });

    // Example: Load data from a JSON file
    d3.json("assets/fruits.json")
      .then(data => {
        console.log("JSON Data:", data);
        // const con = d3.select("#J")
        //   con.selectAll("h1")
        //   .data(data as any[])
        //   .enter()
        //   .append("h1")
        //   .text(d => `${d.name} - ${d.color}`)
        //   .style("color", d => d.color);
      })
      .catch(error => {
        console.error("Error loading JSON:", error);
      });
      

    // Example: Load CSV and draw circles
    d3.csv("assets/point.csv")
      .then(data => {
        d3.select("#circle-chart")
          .selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", (d, i) => (i * 70) + 50)
          .attr("cy", 100)
          .attr("r", d => +d['size'])
          .attr("fill", "lightgreen")
          .attr("stroke", "black");
      });
  }

}
