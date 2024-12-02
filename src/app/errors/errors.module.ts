import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorDevelopComponent } from './error-develop/error-develop.component';
import { ErrorUnauthorizedComponent } from './error-unauthorized/error-unauthorized.component';
import { MaitenanceComponent } from './maitenance/maitenance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotOk500Component } from './not-ok500/not-ok500.component';


@NgModule({
  declarations: [
    ErrorDevelopComponent,
    ErrorUnauthorizedComponent,
    MaitenanceComponent,
    NotFoundComponent,
    NotOk500Component,
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
