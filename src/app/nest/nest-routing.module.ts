import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NesthomeComponent } from './nesthome/nesthome.component';
import { NestjsSetupComponent } from './nestjs-setup/nestjs-setup.component';
import { FirstControllerComponent } from './first-controller/first-controller.component';
import { ServicesDiComponent } from './services-di/services-di.component';
import { ModulesOrganizationComponent } from './modules-organization/modules-organization.component';
import { DatabaseIntegrationComponent } from './database-integration/database-integration.component';
import { InterceptorsPipesComponent } from './interceptors-pipes/interceptors-pipes.component';
import { AuthGuardsComponent } from './auth-guards/auth-guards.component';
import { ErrorHandlingNestjsComponent } from './error-handling-nestjs/error-handling-nestjs.component';
import { DtoValidationComponent } from './dto-validation/dto-validation.component';
import { TransactionAcidComponent } from '../sql/transaction-acid/transaction-acid.component';
import { MiddlewareNestjsComponent } from './middleware-nestjs/middleware-nestjs.component';
import { CustomDecoratorsComponent } from './custom-decorators/custom-decorators.component';

const routes: Routes = [
    {
      path: '',
      component: NesthomeComponent,
      children:[
        {
            path: '',
            redirectTo: 'nestjs-setup',
            pathMatch: 'full'   
        },
        {
          path: 'nestjs-setup',
          component:NestjsSetupComponent 
        },
         {
          path: 'first-controller',
          component:FirstControllerComponent
        },
        {
          path: 'services-di',
          component:ServicesDiComponent 
        },
         {
          path: 'modules-organization',
          component:ModulesOrganizationComponent  
        },
         {
          path: 'database-integration',
          component:DatabaseIntegrationComponent 
        },
         {
          path: 'dto-validation',
          component:DtoValidationComponent
        },
         {
          path: 'error-handling-nestjs',
          component:ErrorHandlingNestjsComponent
        },
         {
          path: 'auth-guards',
          component:AuthGuardsComponent
        },
         {
          path: 'interceptors-pipes',
          component:InterceptorsPipesComponent
        },
         {
          path: 'middleware-nestjs',
          component:MiddlewareNestjsComponent
        },
         {
          path: 'custom-decorators',
          component:CustomDecoratorsComponent 
        },
      ]
    }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestRoutingModule { }
