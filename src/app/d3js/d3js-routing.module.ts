import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3Component } from './d3/d3.component';
import { SvgBasicsComponent } from './svg-basics/svg-basics.component';
import { SelectionsDataBindingComponent } from './selections-data-binding/selections-data-binding.component';
import { ScalesComponent } from './scales/scales.component';
import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';
import { DataLoadingComponent } from './data-loading/data-loading.component';
import { BasicTransitionsComponent } from './basic-transitions/basic-transitions.component';
import { AdvancedScalesComponent } from './advanced-scales/advanced-scales.component';
import { AxesLegendsComponent } from './axes-legends/axes-legends.component';
import { PathGeneratorsComponent } from './path-generators/path-generators.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ForceLayoutsComponent } from './force-layouts/force-layouts.component';
import { ZoomPanComponent } from './zoom-pan/zoom-pan.component';
import { BrushComponentsComponent } from './brush-components/brush-components.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { InterviewD3Component } from './interview-d3/interview-d3.component';

const routes: Routes = [
      
       {
          path: '',
          component: D3Component,
          children:[
                   {
                      path: '',
                      redirectTo: 'svg-basics',
                      pathMatch: 'full'   
                  },
                  {
                    path: 'svg-basics',
                    component:SvgBasicsComponent 
                  },
                  {
                    path: 'selections-data-binding',
                    component:SelectionsDataBindingComponent
                  },
                   {
                    path: 'scales',
                    component:ScalesComponent
                  },
                   {
                    path: 'dom-manipulation',
                    component:DomManipulationComponent
                  },
                  {
                    path: 'data-loading',
                    component: DataLoadingComponent
                  },
                  {
                    path: 'basic-transitions',
                    component: BasicTransitionsComponent
                  },
                  {
                    path: 'advanced-scales',
                    component: AdvancedScalesComponent
                  },
                  {
                    path: 'axes-legends',
                    component: AxesLegendsComponent
                  },
                  {
                    path: 'path-generators',
                    component: PathGeneratorsComponent
                  },
                  {
                    path: 'layouts',
                    component: LayoutsComponent
                  },
                  {
                    path: 'force-layouts',
                    component: ForceLayoutsComponent
                  },
                   {
                    path: 'zoom-pan',
                    component: ZoomPanComponent
                  },
                   {
                    path: 'brush-components',
                    component: BrushComponentsComponent
                  },
                   {
                    path: 'event-handling',
                    component: EventHandlingComponent
                  },
                  {
                    path: 'interview-d3',
                    component: InterviewD3Component
                  }

                ]
       },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3jsRoutingModule { }
