import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-notificaciones-modal',
  templateUrl: './notificaciones-modal.component.html',
  styleUrl: './notificaciones-modal.component.css'
})
export class NotificacionesModalComponent implements OnInit, OnDestroy {
  tipo: string | undefined;
  titulo: string | undefined;
  mensaje: string | undefined;
  enIngles: boolean = false;

  constructor(
    private renderer: Renderer2,
    public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // solución problema al utilizar más de un modal
    this.renderer.removeStyle(document.body, 'padding-right');
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
