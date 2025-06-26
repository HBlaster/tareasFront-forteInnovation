import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  confirmacionEliminacion(): Promise<boolean> {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la tarea permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => result.isConfirmed);
  }

  mensajeExito(titulo: string, texto: string = '') {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  mensajeError(titulo: string, texto: string = '') {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
}
