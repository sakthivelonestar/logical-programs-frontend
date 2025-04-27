import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
   {
    path:"",
    loadChildren: () => import('./java-script/java-script.module').then(m => m.JavaScriptModule)
   },
   {
    path: "javascript",
    loadChildren: () => import('./java-script/java-script.module').then(m => m.JavaScriptModule)
   },
   {
      path: "typescript",
      loadChildren: () => import('./type-script/type-script.module').then(m => m.TypeScriptModule)
   },
   {
      path: "angular",
      loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
   },
   {
      path: "d3js",
      loadChildren: () => import('./d3js/d3js.module').then(m => m.D3jsModule)
   }
];
