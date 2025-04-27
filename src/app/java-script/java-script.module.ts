import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaScriptRoutingModule } from './java-script-routing.module';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { JsComponent } from './js/js.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JavaScriptRoutingModule,
    ArrayMethodsComponent,
    JsComponent 
  ]
})
export class JavaScriptModule { }
