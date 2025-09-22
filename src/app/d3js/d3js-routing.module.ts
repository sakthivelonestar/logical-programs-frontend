import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3Component } from './d3/d3.component';
import { SvgBasicsComponent } from './svg-basics/svg-basics.component';

const routes: Routes = [
      
       {
          path: '',
          component: D3Component,
          children:[
                   {
                      path: '',
                      redirectTo: 'svg-basic',
                      pathMatch: 'full'   
                  },
                  {
                    path: 'svg-basic',
                    component:SvgBasicsComponent 
                  },
                ]
       },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3jsRoutingModule { }
