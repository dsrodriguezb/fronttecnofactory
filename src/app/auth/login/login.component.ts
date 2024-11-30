import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correo: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
      Validators.maxLength(50)
    ]
  );

  contrasena: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern(/[a-zA-Z0-9]/)
    ]
  );

  constructor(private authService: AuthService,
    public fb: FormBuilder,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.correo.value, this.contrasena.value).subscribe(data => {
      sessionStorage.setItem(environment.TOKEN, data.token);
      this.authService.nabvarReactivo.next(false);
      this.router.navigate(['/profile']);
    },
    error => {
      console.error('Error en inicio de sesión:', error);
    });
  }
}
