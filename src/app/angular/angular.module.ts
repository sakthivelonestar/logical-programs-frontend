import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { NgComponent } from './ng/ng.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularRoutingModule,
    NgComponent
  ]
})
export class AngularModule { }
