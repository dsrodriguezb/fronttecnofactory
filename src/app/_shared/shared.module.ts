import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { NotificacionesModalComponent } from './components/notificaciones-modal/notificaciones-modal.component';



@NgModule({
  declarations: [
    ConfirmacionComponent,
    NotificacionesModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    ConfirmacionComponent,
    NotificacionesModalComponent
  ]
})
export class SharedModule { }
