import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from '../_shared/_services/auth-guard.service';
import { GuardianService } from '../_shared/_services/guardian.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [GuardianService] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
