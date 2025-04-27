import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsComponent } from './ts/ts.component';

const routes: Routes = [
  {
    path: '',
    component: TsComponent,
    },
  {
    path: 'typescript',
    component: TsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeScriptRoutingModule { }
