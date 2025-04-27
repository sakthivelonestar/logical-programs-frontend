import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3Component } from './d3/d3.component';

const routes: Routes = [
        {
          path: '',
          component: D3Component,
      },
       {
          path: 'd3js',
          component: D3Component,
       },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3jsRoutingModule { }
