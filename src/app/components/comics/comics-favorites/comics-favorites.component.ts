import { Component } from '@angular/core';
import { ComicsService } from '../_services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-comics-favorites',
  templateUrl: './comics-favorites.component.html',
  styleUrl: './comics-favorites.component.css'
})
export class ComicsFavoritesComponent {

  public favoriteComics: any[] = [];
  public helper = new JwtHelperService();
  private token = sessionStorage.getItem(environment.TOKEN) ?? '';
  private decodedToken = this.helper.decodeToken(this.token);

  constructor(private comicService:ComicsService, public route:ActivatedRoute) { }

  ngOnInit() {
    const userId = this.decodedToken.sub;
    this.loadFavorites(userId);
  }

  loadFavorites(id:number) {
    this.comicService.getFavorites(id).subscribe(
      (data) => {
        this.favoriteComics = data;
        console.log('Favorite comics:', this.favoriteComics);
      },
      (error) => {
        console.error('Error loading favorite comics:', error);
      }
    );
  }

}
