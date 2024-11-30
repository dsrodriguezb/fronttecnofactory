import { Component } from '@angular/core';
import { ComicsService } from '../_services/comics.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent {
  public comics!: Observable<any>;
  public favoriteComics: any[] = [];
  public helper = new JwtHelperService();
  private token = sessionStorage.getItem(environment.TOKEN) ?? '';
  private decodedToken = this.helper.decodeToken(this.token);

  ngOnInit() {
    this.getComics();
  }
  constructor(private comicService:ComicsService, public route:ActivatedRoute) { }


  getComics(){
    this.comics = this.comicService.getAllComics();
  }

  markAsFavorite(comic: any) {
    const userId = this.decodedToken.sub;
    this.comicService.toggleFavorite(comic.id, userId).subscribe(
      (response) => {
        console.log(response.message);
      },
      (error) => {
        console.error('Error toggling favorite:', error);
      }
    );
  }

  isFavorite(comic: any): boolean {
    return this.favoriteComics.some(fav => fav.comic_id === comic.id);
  }
}
