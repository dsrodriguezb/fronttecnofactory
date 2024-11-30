import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Subject, tap } from 'rxjs';
import { User } from '../_model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public nabvarReactivo = new Subject<boolean>();

  private url: string = `${environment.HOST}/api/auth`;
  private http = inject(HttpClient); private router = inject(Router);

  constructor() { }

  public login(Correo: string, Password: string) {
    const body = `grant_type=password&correo=${encodeURIComponent(Correo)}&password=${encodeURIComponent(Password)}`;
    return this.http.post<any>(`${this.url}/signin`, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('Authorization', 'Basic' + btoa(`${environment.TOKEN_AUTH}`))
    });
  }

  public tokenExpired(){
    sessionStorage.clear();
    this.nabvarReactivo.next(true);
    this.router.navigate(['/login']);
  };

  public logout() {
    const token = sessionStorage.getItem(environment.TOKEN);
    const dto = { "token": token };
    this.http.post(`${this.url}/logout`, dto).subscribe(data => {
      sessionStorage.clear();
      this.nabvarReactivo.next(true);
      this.router.navigate(['/login']);
    });
  }

  public estaLogueado(): boolean {
    const tk = sessionStorage.getItem(environment.TOKEN);
    return tk != null;
  }

  public registerUser(registro: User){
    return this.http.post<any>(`${this.url}/signup`, registro);
  }
}
