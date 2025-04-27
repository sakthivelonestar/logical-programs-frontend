import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3jsRoutingModule } from './d3js-routing.module';
import { D3Component } from './d3/d3.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    D3jsRoutingModule,
    D3Component
  ]
})
export class D3jsModule { }
