import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { JsComponent } from './js/js.component';
import { FunctionComponent } from './function/function.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ClousersComponent } from './clousers/clousers.component';
import { ContextComponent } from './context/context.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { AsyncComponent } from './async/async.component';
import { PromisesComponent } from './promises/promises.component';
import { E6Component } from './e6/e6.component';
import { PatternsComponent } from './patterns/patterns.component';
import { MemoryComponent } from './memory/memory.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { ModuleComponent } from './module/module.component';
import { BrowserApiComponent } from './browser-api/browser-api.component';
import { WebApiComponent } from './web-api/web-api.component';


const routes: Routes = [
    {
      path: 'javascript',
      component: JsComponent,
      children:[
        {
          path: '',
          component:ControlFlowComponent 
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
          path: 'errorhandling',
          component:ErrorHandlingComponent
        },
        {
          path: 'clousers',
          component:ClousersComponent
        },
        {
          path: 'context',
          component:ContextComponent 
        },
        {
          path: 'prototypes',
          component:PrototypesComponent 
        },
        {
          path: 'async',
          component:AsyncComponent 
        },
        {
          path: 'promises',
          component:PromisesComponent 
        },
        {
          path: 'e6',
          component:E6Component 
        },
        {
          path: 'patterns',
          component:PatternsComponent 
        },
        {
          path: 'memory',
          component:MemoryComponent 
        },
        {
          path: 'optimization',
          component:OptimizationComponent 
        },
        {
          path: 'modules',
          component: ModuleComponent
        },
        {
          path: 'browser-api',
          component: BrowserApiComponent
        },
        {
          path: 'web-api',
          component: WebApiComponent
        },
        
      ]
      },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaScriptRoutingModule { }
