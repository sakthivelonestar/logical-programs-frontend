import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NesthomeComponent } from './nesthome/nesthome.component';

const routes: Routes = [
    {
      path: '',
      component: NesthomeComponent,
      // children:[
      //   {
      //     path: '',
      //     component:DataTypeComponent 
      //   },
      //    {
      //     path: 'data-types',
      //     component:DataTypeComponent 
      //   },
      //   {
      //     path: 'basic-queries',
      //     component:BasicQueriesComponent 
      //   },
      //    {
      //     path: 'filtering',
      //     component:FilteringSortingComponent 
      //   },
      //    {
      //     path: 'joins',
      //     component:JoinsComponent 
      //   },
      //    {
      //     path: 'aggregations',
      //     component:AggregationFunctionsComponent
      //   },
      //    {
      //     path: 'subqueries',
      //     component:SubqueryCtesComponent 
      //   },
      //    {
      //     path: 'window-functions',
      //     component:WindowComponent 
      //   },
      //    {
      //     path: 'stored-procedures',
      //     component:StoreProceduresComponent 
      //   },
      //    {
      //     path: 'transactions',
      //     component:TransactionAcidComponent 
      //   },
      //    {
      //     path: 'indexing',
      //     component:IndexingComponent 
      //   },
      //   {
      //     path: 'advanced-sql',
      //     component:AdvancedSqlComponent 
      //   },
      // ]     
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestRoutingModule { }
