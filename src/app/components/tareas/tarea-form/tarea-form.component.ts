import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea, EstadoTarea } from '../../../models/tarea.model';
import { TareaService } from '../../../services/tarea.service';
import {NotificationService} from '../../../services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css'],
})
export class TareaFormComponent implements OnInit {
  tareaForm!: FormGroup;
  estadoTarea = EstadoTarea;
  id: number = 0;
  fechaCreacionOriginal: string = '';

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: [EstadoTarea.Pendiente, Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.id = +id;
        this.tareaService.getById(this.id).subscribe((tarea) => {
          this.tareaForm.patchValue(tarea);
          this.fechaCreacionOriginal = tarea.fechaCreacion; // 👈 Guardar valor original
        });
      }
    }
  }

  guardarTarea(): void {
  if (this.tareaForm.invalid) return;

  const tareaData: Tarea = {
    ...this.tareaForm.value,
    id: this.id ?? 0,
    fechaCreacion: this.id
      ? this.fechaCreacionOriginal
      : new Date().toISOString(),
    estado: +this.tareaForm.value.estado,
  };

  const operacion = this.id
    ? this.tareaService.update(this.id, tareaData)
    : this.tareaService.create(tareaData);

  operacion.subscribe({
    next: () => {
      this.notificationService.mensajeExito(
        this.id ? 'Tarea actualizada' : 'Tarea creada',
        this.id ? 'Los cambios se guardaron correctamente.' : 'La tarea se creó exitosamente.'
      ).then(() => this.router.navigate(['/tareas']));
    },
    error: (err) => {
      console.error('Error al guardar tarea', err);
      this.notificationService.mensajeError('Error', 'No se pudo guardar la tarea.');
    }
  });
}
}