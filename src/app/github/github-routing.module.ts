import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  {
    path: '',
    component: GithubComponent,
     children:[
          {
              path: '',
              component:ProcessComponent, 
            },
            {
              path: 'gitprocess',
              component:ProcessComponent, 
            },
          ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
