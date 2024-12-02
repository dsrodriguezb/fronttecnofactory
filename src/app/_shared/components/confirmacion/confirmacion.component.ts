import { Component, EventEmitter, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent implements OnInit, OnDestroy {
  tipo!: string;
  titulo!: string;
  mensaje!: string;
  enIngles: boolean = false;
  onClose!: Subject<boolean>;
  @Output() action = new EventEmitter();
  constructor(private renderer: Renderer2, public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
  }

  ngOnDestroy() {
    // solución problema al utilizar más de un modal
    this.renderer.removeStyle(document.body, 'padding-right');
    this.renderer.removeClass(document.body, 'modal-open');
  }

  public onConfirm(): void {
    this.bsModalRef.content.onClose.next(true);
    this.bsModalRef.hide();
  }

  public onCancel(): void {
    this.bsModalRef.content.onClose.next(false);
    this.bsModalRef.hide();
  }

  public hideConfirmationModal(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
