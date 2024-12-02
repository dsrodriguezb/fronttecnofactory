import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorDevelopComponent } from './error-develop/error-develop.component';
import { ErrorUnauthorizedComponent } from './error-unauthorized/error-unauthorized.component';
import { NotOk500Component } from './not-ok500/not-ok500.component';
import { MaitenanceComponent } from './maitenance/maitenance.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'error-develop', component: ErrorDevelopComponent },
  { path: 'error_unauthorized', component: ErrorUnauthorizedComponent },
  { path: 'error_server', component: NotOk500Component },
  { path: 'maitenance', component: MaitenanceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
