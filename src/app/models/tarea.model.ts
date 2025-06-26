export enum EstadoTarea {
  Pendiente = 0,
  EnProgreso = 1,
  Completada = 2
}

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
  fechaCreacion: string; 
}
