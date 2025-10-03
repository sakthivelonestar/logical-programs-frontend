import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggerFBComponent } from './logger-f-b/logger-f-b.component';
import { HighlightsStoreHomeComponent } from './highlights-store-home/highlights-store-home.component';
import { EmailComponent } from './email/email.component';
import { SwagerComponent } from './swager/swager.component';
import { HttpLoderComponent } from './http-loder/http-loder.component';

const routes: Routes = [
       {
          path: '',
          component:HighlightsStoreHomeComponent ,
          children:[
                   {
                      path: '',
                      redirectTo: 'logger',
                      pathMatch: 'full'   
                  },
                  {
                    path: 'logger',
                    component:LoggerFBComponent
                  },
                   {
                    path: 'loader',
                    component:HttpLoderComponent
                  },
                   {
                    path: 'email',
                    component:EmailComponent
                  },
                   {
                    path: 'swagger',
                    component:SwagerComponent
                  },
                  
                ]
       },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighlightsStoreRoutingModule { }
