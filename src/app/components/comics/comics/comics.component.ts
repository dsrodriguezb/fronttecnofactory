import { Component } from '@angular/core';
import { ComicsService } from '../_services/comics.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalService } from '../../../_shared/_services/modal.service';
import { ToastService } from '../../../_shared/_services/toast.service';

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
  constructor(private comicService:ComicsService, public route:ActivatedRoute, private _notificacionesService: ModalService, private toastService: ToastService) { }


  getComics(){
    this.comics = this.comicService.getAllComics();
  }

  markAsFavorite(comic: any) {

    this._notificacionesService
      .mostrarNotificacionConfirmacion(
        'INFO',
        'Guardar información',
        '¿Está seguro que realizar esta accion ?'
      ).subscribe((reason: string) => {
        if (reason === 'OK') {
          const userId = this.decodedToken.sub;
          this.comicService.toggleFavorite(comic.id, userId).subscribe(
            (response) => {
              let message = response;
              if(message === 'Removed from favorites'){
                this.toastService.show('error', 'Éxito', 'Eliminado de favoritos', 3000);
              }else{
                this.toastService.show('success', 'Éxito', 'Agregado a favoritos', 3000);
              }
              
            },
            (error) => {
              console.error('Error toggling favorite:', error);
            }
          );
        }else{
          this._notificacionesService.mostrarNotificacion('SUCCESS', `Alerta`, `Accion cancelada`);
        }
        
      });

    
  }

  isFavorite(comic: any): boolean {
    return this.favoriteComics.some(fav => fav.comic_id === comic.id);
  }
}
