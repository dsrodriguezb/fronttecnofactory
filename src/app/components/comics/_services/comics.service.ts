import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private url: string = `${environment.URL_API}/comics`;
  private key: string = `${environment.PUBLIC_KEY}`;
  private hash: string = `${environment.HASH}`;
  private url_api: string = `${environment.HOST}`;


  constructor(private http:HttpClient) { }

  getAllComics(): Observable <any> {
    return this.http.get<any>(`${this.url}?ts=1&apikey=${this.key}&hash=${this.hash}`).
    pipe(map((data: any)=>data.data.results))
  }

  getOneComic(id:number): Observable <any>{
    return this.http.get<any>(`${this.url}/${id}?ts=1&apikey=${this.key}&hash=${this.hash}`)
    .pipe(
      map((response: any) => {
        return response.data.results && response.data.results.length > 0 ? response.data.results[0] : null;
      })
    );
  }

  toggleFavorite(comicId: number, userId: number): Observable<any> {
    return this.http.post(`${this.url_api}/api/favorites/${comicId}/${userId}`, {});
  }

  getFavorites(userId: number): Observable<any> {
    return this.http.get(`${this.url_api}/api/favorites/${userId}`);
  }
}
