import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { ComicsFavoritesComponent } from './comics-favorites/comics-favorites.component';


@NgModule({
  declarations: [
    ComicsComponent,
    ComicsDetailsComponent,
    ComicsFavoritesComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
