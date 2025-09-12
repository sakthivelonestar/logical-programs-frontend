import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgComponent } from './ng/ng.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplatesFormsComponent } from './templates-forms/templates-forms.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentsDecoratorsComponent } from './components-decorators/components-decorators.component';
import { AngularArchitectureComponent } from './angular-architecture/angular-architecture.component';

const routes: Routes = [
  {
    path: '',
    component: NgComponent,
      children:[
      {
        path: '',
        component: AngularArchitectureComponent,
      },
       {
        path: 'angular-architecture',
        component: AngularArchitectureComponent,
      },
       {
        path: 'components-decorators',
        component: ComponentsDecoratorsComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
      {
        path: 'directives',
        component: DirectivesComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
      {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent,
      },
      {
        path: 'templates-forms',
        component: TemplatesFormsComponent,
      },
      {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
      },
        ]
  },
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
