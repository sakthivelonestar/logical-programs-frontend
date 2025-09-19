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
import { ServicesDiComponent } from './services-di/services-di.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { StateManagementBasicsComponent } from './state-management-basics/state-management-basics.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ObservablesRxjsComponent } from './observables-rxjs/observables-rxjs.component';
import { RoutingGuardsComponent } from './routing-guards/routing-guards.component';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';

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
      {
        path:"services-di",
        component:ServicesDiComponent
      },
      {
        path:"routing-navigation",
        component:RoutingNavigationComponent
      },
      {
        path:"routing-guards",
        component:RoutingGuardsComponent
      },
      {
        path:"observables-rxjs",
        component:ObservablesRxjsComponent
      },
      {
        path:"http-client",
        component:HttpClientComponent
      },
      {
        path:"angular-material",
        component:AngularMaterialComponent
      },
      {
        path:"state-management-basics",
        component:StateManagementBasicsComponent
      },
      {
        path:"component-communication",
        component:ComponentCommunicationComponent
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
