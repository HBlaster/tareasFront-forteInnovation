import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea, EstadoTarea } from '../../../models/tarea.model';
import { TareaService } from '../../../services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {

  tareaForm!: FormGroup;
  estadoTarea = EstadoTarea;

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.tareaForm = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: [EstadoTarea.Pendiente, Validators.required]
  });

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.tareaService.getById(+id).subscribe(tarea => {
      this.tareaForm.patchValue(tarea);
    });
  }
  }

  crearTarea(): void {
    if (this.tareaForm.invalid) return;

    const nuevaTarea: Tarea = {
      ...this.tareaForm.value,
      id: 0,
      fechaCreacion: new Date().toISOString()
    };

    this.tareaService.create(nuevaTarea).subscribe({
      next: () => {
        alert('Tarea creada con éxito');
        this.tareaForm.reset({ estado: EstadoTarea.Pendiente });
      },
      error: (err) => console.error('Error al crear tarea', err)
    });
  }

}
