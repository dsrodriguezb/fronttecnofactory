import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { NotificacionesModalComponent } from './components/notificaciones-modal/notificaciones-modal.component';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    ConfirmacionComponent,
    NotificacionesModalComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    ConfirmacionComponent,
    NotificacionesModalComponent,
    ToastComponent
  ]
})
export class SharedModule { }
