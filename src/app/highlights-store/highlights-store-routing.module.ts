import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggerFBComponent } from './logger-f-b/logger-f-b.component';
import { HighlightsStoreHomeComponent } from './highlights-store-home/highlights-store-home.component';
import { EmailComponent } from './email/email.component';
import { SwagerComponent } from './swager/swager.component';
import { HttpLoderComponent } from './http-loder/http-loder.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { LanguageComponent } from './language/language.component';
import { NotificationComponent } from './notification/notification.component';
import { SonarQubeComponent } from './sonar-qube/sonar-qube.component';
import { CronJobComponent } from './cron-job/cron-job.component';

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
                  {
                    path: 'prime-ng',
                    component:PrimeNgComponent
                  },
                   {
                    path: 'language',
                    component:LanguageComponent
                  },
                   {
                    path: 'notification',
                    component:NotificationComponent
                  },
                  {
                    path: 'sonar-qube',
                    component:SonarQubeComponent
                  },
                  {
                    path:'cron-job',
                    component:CronJobComponent
                  }

                ]
       },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighlightsStoreRoutingModule { }
