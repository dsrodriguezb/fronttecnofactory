import { Component } from '@angular/core';

export interface Toast {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  timeout: number;
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toasts: Toast[] = [];

  constructor() {}

  ngOnInit(): void {}

  showToast(toast: Toast): void {
    this.toasts.push(toast);

    setTimeout(() => {
      this.removeToast(toast);
    }, toast.timeout || 3000);
  }

  removeToast(toast: Toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
