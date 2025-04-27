import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { JsComponent } from './js/js.component';


const routes: Routes = [
    {
      path: 'javascript',
      component: JsComponent,
      children:[
        {
          path: '',
          component: ArrayMethodsComponent
        },
        {
          path: 'array',
          component: ArrayMethodsComponent
        },
      ]
      },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaScriptRoutingModule { }
