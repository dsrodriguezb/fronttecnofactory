import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = `${environment.HOST}/api/auth`;
  private http = inject(HttpClient); private router = inject(Router);
  constructor() { }

  public miPerfil(user: number) {
    return this.http.get<any>(`${this.url}/profile/${user}`);
  }
}
