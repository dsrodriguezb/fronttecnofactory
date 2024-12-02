import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { ComicsFavoritesComponent } from './comics-favorites/comics-favorites.component';
import { GuardianService } from '../../_shared/_services/guardian.service';

const routes: Routes = [
  { path: 'comics', component: ComicsComponent,canActivate: [GuardianService] },
  { path: 'comic/:id', component: ComicsDetailsComponent, canActivate: [GuardianService] },
  { path: 'comics-favorites', component: ComicsFavoritesComponent, canActivate: [GuardianService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
