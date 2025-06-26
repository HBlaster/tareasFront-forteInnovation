import { Component, OnInit  } from '@angular/core';
import { Tarea, EstadoTarea } from '../../../models/tarea.model';
import { TareaService } from '../../../services/tarea.service';
import {NotificationService} from '../../../services/notification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tareas-lista',
  templateUrl: './tareas-lista.component.html',
  styleUrls: ['./tareas-lista.component.css']
})
export class TareasListaComponent implements OnInit {

  tareas: Tarea[] = [];
  estadoTarea = EstadoTarea;

  constructor(private tareaService: TareaService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareaService.getAll().subscribe({
      next: (data) => this.tareas = data,
      error: (err) => console.error('Error al cargar tareas', err)
    });
  }

  getEstadoTexto(estado: EstadoTarea): string {
    return EstadoTarea[estado]; // Convierte 0 → Pendiente, 1 → EnProgreso, etc.
  }
  eliminarTarea(id: number): void {
  this.notificationService.confirmacionEliminacion().then(confirmado => {
    if (!confirmado) return;

    this.tareaService.delete(id).subscribe({
      next: () => {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.notificationService.mensajeExito('Eliminado', 'La tarea fue eliminada con éxito.');
      },
      error: () => this.notificationService.mensajeError('Error', 'No se pudo eliminar la tarea.')
    });
  });
}


  editarTarea(tarea: Tarea): void {
    // this.router.navigate([`/tarea/editar/${tarea.id}`]);
    this.router.navigate(['/tarea/editar', tarea.id]);
  }

}
