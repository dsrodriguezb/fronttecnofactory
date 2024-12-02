import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { JwtModule } from '@auth0/angular-jwt';
import { ErrorInterceptorService } from './errors/_services/error-interceptor.service';
import { SharedModule } from './_shared/shared.module';
import { ComicsModule } from './components/comics/comics.module';
import { ErrorsModule } from './errors/errors.module';

export function tokenGetter(){
  let tk = sessionStorage.getItem(environment.TOKEN);
  return tk != null ? tk : '';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    SharedModule,
    ComicsModule,
    ErrorsModule,
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
