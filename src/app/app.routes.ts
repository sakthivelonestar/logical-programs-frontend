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
      path: "angular",
      loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
   },
   {
      path: "d3js",
      loadChildren: () => import('./d3js/d3js.module').then(m => m.D3jsModule)
   },
    {
      path: "aws",
      loadChildren: () => import('./aws/aws.module').then(m => m.AwsModule)
   },
    {
      path: "gitHub",
      loadChildren: () => import('./github/github.module').then(m => m.GithubModule)
   },
    {
      path: "sql",
      loadChildren: () => import('./sql/sql.module').then(m => m.SqlModule)
   },
    {
      path: "nest",
      loadChildren: () => import('./nest/nest.module').then(m => m.NestModule)
   },
];
