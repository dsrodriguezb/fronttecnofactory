import { Component, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment.development';
import { User } from '../_model/user';
import { Router } from '@angular/router';
import { ProfileService } from '../_service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public helper = new JwtHelperService();
  private token = sessionStorage.getItem(environment.TOKEN) ?? '';
  private decodedToken = this.helper.decodeToken(this.token);

  public profile: User = {}; 
  private router = inject(Router);
  private profileService = inject(ProfileService)

  
  ngOnInit(): void {
    this.mostrarPerfil();
  }

  mostrarPerfil(){
    const user = this.decodedToken.login;
    this.profileService.miPerfil(user).subscribe(data=>{
      this.profile = data.user;
    });
  }
}
