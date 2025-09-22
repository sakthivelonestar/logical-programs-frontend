import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { JsComponent } from './js/js.component';
import { FunctionComponent } from './function/function.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ClousersComponent } from './clousers/clousers.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { PromisesComponent } from './promises/promises.component';
import { E6Component } from './e6/e6.component';
import { InterviewJsComponent } from './interview-js/interview-js.component';
import { MathComponent } from './math/math.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { StringMethodsComponent } from './string-methods/string-methods.component';



const routes: Routes = [
    {
      path: 'javascript',  
      component: JsComponent,
      children:[
         {
            path: '',
            redirectTo: 'controleflow',
            pathMatch: 'full'   
        },
        {
          path: 'controleflow',
          component:ControlFlowComponent 
        },
        {
          path: 'functions',
          component:FunctionComponent 
        },
        {
          path: 'array-methods',
          component: ArrayMethodsComponent
        },
        {
          path: 'clousers',
          component:ClousersComponent
        },
        {
          path: 'prototypes',
          component:PrototypesComponent 
        },
        {
          path: 'promises',
          component:PromisesComponent 
        },
        {
          path: 'dom',
          component:E6Component 
        },
          {
          path: 'math',
          component: MathComponent
        },
         {
          path: 'date',
          component: DateTimeComponent
        },
         {
          path: 'string-methods',
          component: StringMethodsComponent
        },
        {
          path: 'interview-js',
          component: InterviewJsComponent
        },
       
      ]
      },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaScriptRoutingModule { }
