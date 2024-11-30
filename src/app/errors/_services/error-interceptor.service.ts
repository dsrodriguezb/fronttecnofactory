import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, retry, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  private router = inject(Router);


  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(retry(environment.REINTENTOS)).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.body && event.body.error === true && event.body.errorMessage) {
          throw new Error(event.body.errorMessage);
        }
      }
    })).pipe(catchError((err) => {
      if (err.status == 0) {
        this.router.navigate(['/maitenance']);
      } else if (err.error.status == 400) {
        if(err.error.error){
          alert(err.error.error);
        }else{
          alert(err.error.message);
        }
        
      } else if (err.error.status == 401) {
        this.router.navigate(['/error_unauthorized']);
      } else if (err.error.status == 404) {
        this.router.navigate(['/error-develop']);
      } else if (err.error.status == 405) {
        this.router.navigate(['/error-develop']);
      } else if (err.error.status == 415) {
        this.router.navigate(['/error-develop']);
      } if (err.error.status == 500) {
        this.router.navigate(['/error_server']);
      }
      return EMPTY;
    }));
  }

}

