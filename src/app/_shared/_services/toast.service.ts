import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';


@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  show(
    type: 'success' | 'error' | 'info' | 'warning',
    title: string,
    message: string,
    timeout: number = 3000
  ): void {
    // Crear la fábrica del componente
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);

    // Crear el componente dinámicamente
    const componentRef = componentFactory.create(this.injector);

    // Pasar los datos al componente
    const toastComponentInstance = componentRef.instance;
    toastComponentInstance.toasts.push({
      type,
      title,
      message,
      timeout,
    });

    // Añadir el componente al DOM
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);

    // Quitar el componente del DOM una vez eliminado
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, timeout + 500);
  }
}


