import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsComponent } from './aws/aws.component';
import { DeploymentComponent } from './deployment/deployment.component';

const routes: Routes = [
  {
    path: '',
    component: AwsComponent,
     children:[
          {
              path: '',
              component:DeploymentComponent, 
            },
            {
              path: 'deployment',
              component:DeploymentComponent, 
            },
          ]
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwsRoutingModule { }
