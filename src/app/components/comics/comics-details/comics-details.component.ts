import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from '../_services/comics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrl: './comics-details.component.css'
})
export class ComicsDetailsComponent {
  public comic!: any;  // Aquí almacenamos los detalles del cómic

  constructor(
    private comicService: ComicsService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const comicId = Number(this.route.snapshot.paramMap.get('id'));

    if (comicId) {
      this.comicService.getOneComic(comicId).subscribe(
        (data) => {
          if (data) {
            this.comic = data;
          } else {
            console.error('Comic no encontrado');
          }
        },
        (error) => {
          console.error('Error obteniendo comic:', error);
        }
      );
    }
  }
}
