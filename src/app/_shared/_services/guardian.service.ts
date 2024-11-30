import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../auth/_service/auth.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {

  private authService = inject(AuthService); private router = inject(Router);
  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.estaLogueado() == true) {
      const helper = new JwtHelperService();
      let token = sessionStorage.getItem(environment.TOKEN) ?? '';

      const isExpired = helper.isTokenExpired(token);
      const url: string = state.url;

      if (!isExpired) {
        return true;
      } else {
        this.authService.tokenExpired();
        return false;
      }
    } else {
      this.router.navigate(['/error_unauthorized']);
      return false;
    }
  }
}
  
