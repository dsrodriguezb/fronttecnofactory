import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { JwtModule } from '@auth0/angular-jwt';
import { ErrorDevelopComponent } from './errors/error-develop/error-develop.component';
import { ErrorUnauthorizedComponent } from './errors/error-unauthorized/error-unauthorized.component';
import { MaitenanceComponent } from './errors/maitenance/maitenance.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NotOk500Component } from './errors/not-ok500/not-ok500.component';
import { ErrorInterceptorService } from './errors/_services/error-interceptor.service';
import { ComicsComponent } from './components/comics/comics/comics.component';
import { ComicsDetailsComponent } from './components/comics/comics-details/comics-details.component';
import { ComicsFavoritesComponent } from './components/comics/comics-favorites/comics-favorites.component';

export function tokenGetter(){
  let tk = sessionStorage.getItem(environment.TOKEN);
  return tk != null ? tk : '';
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorDevelopComponent,
    ErrorUnauthorizedComponent,
    MaitenanceComponent,
    NotFoundComponent,
    NotOk500Component,
    ComicsComponent,
    ComicsDetailsComponent,
    ComicsFavoritesComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: [`${environment.IP_PRINCIPAL}`,`${environment.IP_PRINCIPAL_MARVEL}`],
        disallowedRoutes: [`${environment.HOST}/api/auth/login`],
      }
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
