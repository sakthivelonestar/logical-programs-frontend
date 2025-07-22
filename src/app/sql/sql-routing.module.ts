import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlhomeComponent } from './sqlhome/sqlhome.component';
import { BasicQueriesComponent } from './basic-queries/basic-queries.component';
import { DataTypeComponent } from './data-type/data-type.component';
import { AdvancedSqlComponent } from './advanced-sql/advanced-sql.component';
import { IndexingComponent } from './indexing/indexing.component';
import { TransactionAcidComponent } from './transaction-acid/transaction-acid.component';
import { StoreProceduresComponent } from './store-procedures/store-procedures.component';
import { WindowComponent } from './window/window.component';
import { SubqueryCtesComponent } from './subquery-ctes/subquery-ctes.component';
import { AggregationFunctionsComponent } from './aggregation-functions/aggregation-functions.component';
import { JoinsComponent } from './joins/joins.component';
import { FilteringSortingComponent } from './filtering-sorting/filtering-sorting.component';

const routes: Routes = [
    {
      path: 'sql',
      component: SqlhomeComponent,
      children:[
        {
          path: '',
          component:DataTypeComponent 
        },
         {
          path: 'data-types',
          component:DataTypeComponent 
        },
        {
          path: 'basic-queries',
          component:BasicQueriesComponent 
        },
         {
          path: 'filtering',
          component:FilteringSortingComponent 
        },
         {
          path: 'joins',
          component:JoinsComponent 
        },
         {
          path: 'aggregations',
          component:AggregationFunctionsComponent
        },
         {
          path: 'subqueries',
          component:SubqueryCtesComponent 
        },
         {
          path: 'window-functions',
          component:WindowComponent 
        },
         {
          path: 'stored-procedures',
          component:StoreProceduresComponent 
        },
         {
          path: 'transactions',
          component:TransactionAcidComponent 
        },
         {
          path: 'indexing',
          component:IndexingComponent 
        },
        {
          path: 'advanced-sql',
          component:AdvancedSqlComponent 
        },
      ]     
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SqlRoutingModule { }
