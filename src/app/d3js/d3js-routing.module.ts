import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3Component } from './d3/d3.component';
import { SvgBasicsComponent } from './svg-basics/svg-basics.component';
import { SelectionsDataBindingComponent } from './selections-data-binding/selections-data-binding.component';
import { ScalesComponent } from './scales/scales.component';

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
                ]
       },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3jsRoutingModule { }
