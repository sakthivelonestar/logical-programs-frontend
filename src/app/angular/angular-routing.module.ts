import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgComponent } from './ng/ng.component';

const routes: Routes = [
  {
    path: '',
    component: NgComponent,
  },
      {
        path: 'angular',
        component: NgComponent,
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
