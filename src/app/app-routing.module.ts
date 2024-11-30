import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorDevelopComponent } from './errors/error-develop/error-develop.component';
import { ErrorUnauthorizedComponent } from './errors/error-unauthorized/error-unauthorized.component';
import { NotOk500Component } from './errors/not-ok500/not-ok500.component';
import { MaitenanceComponent } from './errors/maitenance/maitenance.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ComicsComponent } from './components/comics/comics/comics.component';
import { ComicsDetailsComponent } from './components/comics/comics-details/comics-details.component';
import { GuardianService } from './_shared/_services/guardian.service';
import { ComicsFavoritesComponent } from './components/comics/comics-favorites/comics-favorites.component';

const routes: Routes = [
  { path: 'comics', component: ComicsComponent,canActivate: [GuardianService] },
  { path: 'comic/:id', component: ComicsDetailsComponent, canActivate: [GuardianService] },
  { path: 'comics-favorites', component: ComicsFavoritesComponent, canActivate: [GuardianService] },
  { path: 'error-develop', component: ErrorDevelopComponent },
  { path: 'error_unauthorized', component: ErrorUnauthorizedComponent },
  { path: 'error_server', component: NotOk500Component },
  { path: 'maitenance', component: MaitenanceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
