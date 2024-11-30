import { Component, inject } from '@angular/core';
import { AuthService } from './auth/_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontTecnofactory';

  flagNabvar: boolean = true;
  sidenavOpen: boolean = false;

  private authService = inject(AuthService);

  ngOnInit(): void {
    if(this.authService.estaLogueado() == true){
      this.flagNabvar = false;
      
    } else {
      this.flagNabvar = true;
    }

    this.authService.nabvarReactivo.subscribe(data => {
      this.flagNabvar = data;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
