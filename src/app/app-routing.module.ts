import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasListaComponent } from './components/tareas/tareas-lista/tareas-lista.component';
import { TareaFormComponent } from './components/tareas/tarea-form/tarea-form.component';

const routes: Routes = [
  { path: 'tareas', component: TareasListaComponent },
  { path: 'tarea/nueva', component: TareaFormComponent },
  { path: 'tarea/editar/:id', component: TareaFormComponent },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: '**', redirectTo: '/tareas' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
